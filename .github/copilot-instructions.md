## Quick Orientation — Hotel01

This project is a small monorepo with two primary services:
- `frontend/` — Next.js (App Router) React UI (Next v16, React 19). UI components are under `frontend/app/components/` and use Tailwind classes.
- `backend/` — Flask REST API (single-file entry `backend/app.py`) with SQLAlchemy models, JWT auth, and an APScheduler job.

What an AI agent should know first
- Key files: `backend/app.py` (endpoints, CORS, scheduler), `frontend/package.json` (dev scripts), `frontend/app/components/Router.tsx` (router wrapper), and `frontend/app/components/*` (UI composition).
- Data flow: frontend calls backend HTTP JSON endpoints. Auth uses JWT tokens returned by `/login` and sent in `Authorization: Bearer <token>` headers.

Run & debug (developer commands)
- Frontend: `cd frontend && npm install` then `npm run dev` (serves at `http://localhost:3000`).
- Backend: activate provided venv and run `python backend/app.py` (creates `hotel.db`, starts scheduler and Flask server on port 5000).
- Test endpoints quickly with curl (example):
  ```bash
  curl -X POST http://localhost:5000/register -H 'Content-Type: application/json' -d '{"email":"a@b.com","username":"a","password":"secret"}'
  ```

Project conventions and gotchas
- Router API: components import `{ Link, useRouter }` from `frontend/app/components/Router.tsx`. Maintain `navigate(path)` semantics when changing routing.
- No central `frontend/utils/api.ts` exists yet — create it to centralize `baseURL` (use `NEXT_PUBLIC_API_BASE_URL`) and to attach JWT Authorization headers for protected endpoints.
- CORS & protocol mismatches are the most common source of "Network Error" in browsers (Postman will work). When debugging browser-only failures check:
  - `backend/app.py` CORS origins include the frontend origin and any LAN IP used for testing.
  - frontend `NEXT_PUBLIC_API_BASE_URL` protocol matches backend (http vs https).

Security & dev HTTPS
- Backend can run with `ssl_context='adhoc'` (dev self-signed cert). If enabled, frontend requests must use `https://` and you must accept the browser warning.

Where an agent should edit first (high-impact locations)
- Add `frontend/utils/api.ts` for axios baseURL + token handling.
- Fix CORS or add origins in `backend/app.py` when browser requests are blocked.
- Convert Figma exports into primitives under `frontend/app/components/ui/*` and then into composed components in `frontend/app/components/`.

Small examples the agent can apply immediately
- Minimal axios helper (create `frontend/utils/api.ts`):
  ```ts
  import axios from 'axios'
  const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000', headers: { 'Content-Type': 'application/json' } })
  API.interceptors.request.use(cfg => { const t = typeof window !== 'undefined' && localStorage.getItem('token'); if (t) cfg.headers.Authorization = `Bearer ${t}`; return cfg })
  export default API
  ```

Notes for maintainers
- Preserve the `role_required()` decorator and JWT claim names when changing backend auth — many routes rely on `claims['sub']` or `claims['role']`.
- Scheduler (`APScheduler`) is started inside `backend/app.py`; do not spawn duplicate scheduler instances in parallel runs.

If you want, I can scaffold `frontend/utils/api.ts`, create small UI primitives (`Button`, `Input`, `Card`) in `frontend/app/components/ui/`, or update CORS in `backend/app.py`. Tell me which and I will apply the changes.
# AI Coding Agent Instructions for Hotel01

## Project Architecture

**Hotel01** is a full-stack hotel booking application with a monorepo structure:

- **Backend** (`backend/app.py`): Flask REST API with JWT auth, SQLAlchemy ORM, and APScheduler for background jobs
- **Frontend** (`frontend/`): Next.js 16 (App Router) React application with Tailwind CSS and Figma-designed UI components
- **Database**: SQLite (`backend/hotel.db`), auto-created via `db.create_all()` on startup
- **Key Service Boundary**: HTTP REST API; frontend communicates via axios; CORS configured in Flask

## Critical Developer Workflows

### Running Locally

**Backend** (Flask):
```bash
cd backend
source venv.env/bin/activate  # Use included venv
python app.py  # Runs on http://localhost:5000, creates DB if missing
```

**Frontend** (Next.js):
```bash
cd frontend
npm install  # Install once
npm run dev  # Dev server on http://localhost:3000
```

### Testing API Endpoints (without frontend)
```bash
# Register
curl -X POST http://localhost:5000/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","username":"test","password":"123456"}'

# Login (get token)
curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"123456"}'

# Protected endpoint (use token from login response)
curl -H "Authorization: Bearer <token>" \
  http://localhost:5000/rooms
```

## Project-Specific Patterns & Conventions

### Backend (`backend/app.py`)

1. **Role-Based Access Control**: Use the `@role_required("role_name")` decorator on endpoints
   - Roles: `guest`, `staff`, `admin`
   - Example: `@role_required("admin")` guards admin-only endpoints like `/rooms` (POST/PUT/DELETE)
   - Always extract identity from JWT claims: `claims = get_jwt()`

2. **Database Models** (SQLAlchemy):
   - `User` (email, username, password_hash, role)
   - `Room` (room_number, status: available/booked/maintenance)
   - `Booking` (guest_id, room_id, check_in/check_out dates, status)
   - `Payment` (booking_id, amount, method, status, transaction_id)
   - Keep relationships bidirectional using `db.relationship()` with `backref=`

3. **Scheduler Job** (`APScheduler`):
   - Job `update_room_statuses()` runs daily at 00:00 UTC, marks completed bookings as available
   - Always wrap with `app.app_context()` when accessing DB outside request handler
   - Do NOT call `scheduler.start()` twice (e.g., in tests)

4. **CORS Configuration** (Flask-CORS):
   - Currently allows only `http://localhost:3000` — add frontend URL (including LAN IPs) when needed
   - Update this line if debugging "Network Error" in browser: `CORS(app, resources={r"/*": {"origins": "..."}})`

### Frontend (`frontend/`)

1. **Routing**: Use `Router.tsx` abstraction, NOT raw `next/link`
   - Import: `import { Link, useRouter } from "./components/Router"`
   - Example: `<Link to="/booking">Check Availability</Link>`
   - Programmatic navigation: `const { navigate } = useRouter(); navigate("/booking")`
   - Router wraps Next.js navigation internally; preserves URL sync and back/forward behavior

2. **UI Component Organization**:
   - Small primitives: `frontend/app/components/ui/` (Button, Card, Input, etc.) — Tailwind wrappers
   - Composed components: `frontend/app/components/` (BookingWidget, Hero, Header, RoomCard, etc.)
   - When converting Figma frames, build from primitives and follow existing naming (e.g., `BookingWidget.tsx`)

3. **API Integration** (needs to be created):
   - No centralized API helper exists yet
   - When adding one (e.g., `frontend/utils/api.ts`), use:
     - `baseURL` from env var `NEXT_PUBLIC_API_BASE_URL` (defaults to `http://localhost:5000`)
     - Axios request interceptor to attach JWT token from localStorage: `Authorization: Bearer <token>`
     - Match backend protocol (HTTP/HTTPS); set env `USE_SSL=1` on backend to enable dev HTTPS

4. **Component State & Forms**:
   - Use `useState` for local form state (see `BookingWidget.tsx` for date/guest selection pattern)
   - On form submit, call API and display response message or error

## Key Integration Points

| Component | Communicates With | Protocol | Auth |
|-----------|-------------------|----------|------|
| Frontend form (e.g., register) | `/register` endpoint | HTTP(S) REST JSON | None (public) |
| Frontend after login | Protected endpoints | HTTP(S) REST JSON | JWT Bearer token |
| Scheduler job | Database | In-process | SQLAlchemy ORM |
| Frontend list page | `/rooms` or `/bookings` | HTTP(S) REST JSON | JWT (optional for rooms list) |

## Common Tasks & Examples

### Add a New Endpoint (Backend)
```python
@app.route('/api/new-feature', methods=['POST'])
@role_required("guest")  # or no decorator if public
def new_feature():
    data = request.get_json()
    # ... logic ...
    return jsonify({"message": "Success"}), 201
```

### Add a New Component (Frontend)
1. Create file: `frontend/app/components/MyComponent.tsx`
2. Import Router & UI primitives: `import { Link, useRouter } from "./Router"; import { Button } from "./ui/button";`
3. Use Tailwind for styling (no separate CSS files)
4. Export as `export function MyComponent() { ... }`

### Debug CORS Issues
- Browser shows "Network Error" or only OPTIONS requests? → Update `CORS(app, ...)` origins in `backend/app.py`
- Use curl to verify backend works: `curl -X POST http://localhost:5000/login -H "Content-Type: application/json" -d '...'`
- Frontend: check `NEXT_PUBLIC_API_BASE_URL` env var matches backend protocol and host

## Files to Read First

- `backend/app.py` — entire API surface, role guards, scheduler, CORS config
- `frontend/package.json` — dependencies and build scripts
- `frontend/app/components/Router.tsx` — routing abstraction (preserve this API)
- `frontend/app/components/BookingWidget.tsx` — example of form + state + API call pattern (when API helper is added)

## What NOT to Change Without Verification

- Do not modify `role_required()` signature or JWT claim names without updating all protected endpoints
- Do not remove `scheduler.start()` or move it outside `__main__` block
- Do not change Router.tsx export names (`Link`, `useRouter`) — all components depend on this API

## Missing Scaffolding (To Implement)

- `frontend/utils/api.ts` — axios client with CORS-compliant headers and token management
- `frontend/app/components/ui/*.tsx` — primitive UI components (Button, Input, Card, etc.)
- `.env.local` (frontend) — example with `NEXT_PUBLIC_API_BASE_URL=http://localhost:5000`
- Database migration setup (Flask-Migrate scripts if schema changes become frequent)

---

**Last Updated**: December 16, 2025  
**Feedback**: Clarify any sections or request scaffolding generation for missing files.
