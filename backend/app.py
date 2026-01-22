from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required, get_jwt
)
from datetime import timedelta, datetime  # Add datetime here
from functools import wraps
from flasgger import Swagger
from flask_apscheduler import APScheduler
import os

# Config class for scheduler settings
class Config:
    SCHEDULER_API_ENABLED = True
    SCHEDULER_TIMEZONE = "UTC"

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)
swagger = Swagger(app, template_file="docs/swagger.yaml")

# Config
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(BASE_DIR, 'hotel.db')}"
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=30)
app.config.from_object(Config)

# Extensions
db = SQLAlchemy(app)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)
scheduler = APScheduler()  # Initialize APScheduler

#  MODELS 
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(20), nullable=False, default="guest")  # guest, staff, admin

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_number = db.Column(db.Integer, unique=True, nullable=False)
    status = db.Column(db.String(20), nullable=False, default="available")  # available, booked, maintenance
    
class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    guest_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'), nullable=False)
    check_in = db.Column(db.Date, nullable=False)
    check_out = db.Column(db.Date, nullable=False)
    status = db.Column(db.String(20), default="pending")  # pending, confirmed, cancelled

    guest = db.relationship("User", backref="bookings")
    room = db.relationship("Room", backref="bookings")


class Payment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    booking_id = db.Column(db.Integer, db.ForeignKey('booking.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    method = db.Column(db.String(50), nullable=False)  # e.g., "Stripe", "PayPal"
    status = db.Column(db.String(20), default="pending")  # pending, paid, failed
    transaction_id = db.Column(db.String(255), unique=True, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    booking = db.relationship("Booking", backref="payment")

#  ROLE DECORATORS 
def role_required(required_role):
    """Reusable role-based access decorator"""
    def decorator(fn):
        @wraps(fn)
        @jwt_required()
        def wrapper(*args, **kwargs):
            claims = get_jwt()
            if claims.get("role") != required_role:
                return jsonify({'message': f'{required_role.capitalize()}s only'}), 403
            return fn(*args, **kwargs)
        return wrapper
    return decorator

#  ROUTES 
@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to Hotel01 API"})

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    username = data.get('username')
    password = data.get('password')
    role = data.get('role', 'guest')  # default is guest

    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400

    if len(password) < 6:
        return jsonify({'message': 'Password must be at least 6 characters'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'User already exists'}), 409

    hashed_pw = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, username=username, password=hashed_pw, role=role)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(msg="Account created successfully"), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password required'}), 400

    user_obj = User.query.filter_by(email=email).first()
    success = user_obj and bcrypt.check_password_hash(user_obj.password, password)

    if success:
        token = create_access_token(
            identity=user_obj.email,
            additional_claims={"role": user_obj.role}
        )
        return jsonify({
            'message': 'Login successful',
            'token': token,
            'role': user_obj.role
        }), 200

    return jsonify({'message': 'Invalid credentials'}), 401


@app.route('/rooms', methods=['POST'])
@role_required("admin")
def create_room():
    data = request.get_json()
    room_number = data.get('room_number')

    if not room_number:
        return jsonify({"message": "Room number is required"}), 400

    if Room.query.filter_by(room_number=room_number).first():
        return jsonify({"message": "Room already exists"}), 409

    new_room = Room(room_number=room_number, status="available")
    db.session.add(new_room)
    db.session.commit()

    return jsonify({"message": f"Room {room_number} created successfully"}), 201

# Get all rooms (Anyone can view rooms)
@app.route('/rooms', methods=['GET'])
@jwt_required(optional=True)
def get_rooms():
    rooms = Room.query.all()
    room_list = [
        {"id": r.id, "room_number": r.room_number, "status": r.status}
        for r in rooms
    ]
    return jsonify(room_list), 200

# Update room (Admin only)
@app.route('/rooms/<int:room_id>', methods=['PUT'])
@role_required("admin")
def update_room(room_id):
    room = Room.query.get(room_id)
    if not room:
        return jsonify({"message": "Room not found"}), 404

    data = request.get_json()
    room.room_number = data.get('room_number', room.room_number)
    room.status = data.get('status', room.status)

    db.session.commit()
    return jsonify({"message": f"Room {room.id} updated successfully"}), 200

# Delete room (Admin only)
@app.route('/rooms/<int:room_id>', methods=['DELETE'])
@role_required("admin")
def delete_room(room_id):
    room = Room.query.get(room_id)
    if not room:
        return jsonify({"message": "Room not found"}), 404

    db.session.delete(room)
    db.session.commit()
    return jsonify({"message": f"Room {room.id} deleted successfully"}), 200


# Create booking (Guest only)

@app.route('/bookings', methods=['POST'])
@role_required("guest")
def create_booking():
    data = request.get_json()
    room_id = data.get('room_id')
    check_in = data.get('check_in')
    check_out = data.get('check_out')

    # Validate dates
    try:
        check_in_date = datetime.strptime(check_in, "%Y-%m-%d").date()
        check_out_date = datetime.strptime(check_out, "%Y-%m-%d").date()
    except:
        return jsonify({"message": "Invalid date format. Use YYYY-MM-DD"}), 400

    if check_in_date >= check_out_date:
        return jsonify({"message": "Check-out must be after check-in"}), 400

    # Check room availability
    room = Room.query.get(room_id)
    if not room or room.status != "available":
        return jsonify({"message": "Room not available"}), 400

    # Prevent double booking
    overlapping = Booking.query.filter(
        Booking.room_id == room_id,
        Booking.status == "confirmed",
        Booking.check_in < check_out_date,
        Booking.check_out > check_in_date
    ).first()

    if overlapping:
        return jsonify({"message": "Room is already booked for these dates"}), 409

    # Create booking
    claims = get_jwt()
    guest = User.query.filter_by(email=claims["sub"]).first()
    new_booking = Booking(
        guest_id=guest.id,
        room_id=room.id,
        check_in=check_in_date,
        check_out=check_out_date,
        status="confirmed"
    )

    db.session.add(new_booking)

    # mark room as booked
    room.status = "booked"

    db.session.commit()
    
    return jsonify({"message": "Booking created successfully"}), 201

# View my bookings (Guest only)

@app.route('/bookings/me', methods=['GET'])
@role_required("guest")
def my_bookings():
    claims = get_jwt()
    guest = User.query.filter_by(email=claims["sub"]).first()
    bookings = Booking.query.filter_by(guest_id=guest.id).all()

    booking_list = [
        {
            "id": b.id,
            "room_number": b.room.room_number,
            "check_in": b.check_in.strftime("%Y-%m-%d"),
            "check_out": b.check_out.strftime("%Y-%m-%d"),
            "status": b.status
        }
        for b in bookings
    ]
    return jsonify(booking_list), 200

# View all bookings (Admin only) 

@app.route('/bookings', methods=['GET'])
@role_required("admin")
def all_bookings():
    bookings = Booking.query.all()
    return jsonify([
        {
            "id": b.id,
            "guest": b.guest.username,
            "room_number": b.room.room_number,
            "check_in": b.check_in.strftime("%Y-%m-%d"),
            "check_out": b.check_out.strftime("%Y-%m-%d"),
            "status": b.status
        } for b in bookings
    ]), 200

@app.route('/bookings/<int:booking_id>', methods=['PUT'])
@role_required("admin")
def update_booking(booking_id):
    booking = Booking.query.get(booking_id)
    if not booking:
        return jsonify({"message": "Booking not found"}), 404

    data = request.get_json()
    new_status = data.get("status", booking.status)
    
    # Update booking status
    booking.status = new_status
    
    # Update room status based on booking status
    if new_status == "cancelled":
        booking.room.status = "available"
    elif new_status == "confirmed":
        booking.room.status = "booked"

    db.session.commit()
    return jsonify({
        "message": "Booking updated",
        "booking_status": booking.status,
        "room_status": booking.room.status
    }), 200

# users dash routes
@app.route('/dashboard', methods=['GET'])
@role_required("guest")
def dashboard():
    return jsonify({"message": "Welcome guest, here’s your dashboard"}), 200

@app.route('/admin', methods=['GET'])
@role_required("admin")
def admin_panel():
    return jsonify({"message": "Admin panel - restricted access"}), 200

@app.route('/staff', methods=['GET'])
@role_required("staff")
def staff_panel():
    return jsonify({"message": "Staff panel - restricted access"}), 200

#  ROOM STATUS SCHEDULER 
def update_room_statuses():
    """Update room statuses for completed bookings"""
    with app.app_context():
        today = datetime.today().date()
        bookings = Booking.query.filter(Booking.status == "confirmed").all()
        updated = 0
        for b in bookings:
            if b.check_out <= today:  # guest already checked out
                b.status = "completed"
                b.room.status = "available"
                updated += 1
        db.session.commit()
        print(f"[Scheduler] {updated} rooms updated at {datetime.now()}")

# Schedule daily update at midnight
scheduler.add_job(
    id='room_status_update',
    func=update_room_statuses,
    trigger='cron',
    hour=0,
    minute=0
)

#  RUN APP 
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        # Run initial update
        update_room_statuses()
    scheduler.start()
    app.run(debug=True)
