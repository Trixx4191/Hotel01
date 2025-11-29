import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Wifi, Car, Coffee, Users, Bed, Bath } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "./Router";

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    amenities: string[];
    maxGuests: number;
    bedType: string;
    bathrooms: number;
    size: string;
    isSpecialOffer?: boolean;
  };
}

export function RoomCard({ room }: RoomCardProps) {
  const amenityIcons: { [key: string]: any } = {
    wifi: Wifi,
    parking: Car,
    coffee: Coffee,
    // Add more mappings as needed
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
        {/* Image */}
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={room.image}
            alt={room.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Special Offer Badge */}
          {room.isSpecialOffer && (
            <Badge className="absolute top-4 left-4 bg-amber-600 text-white border-0">
              Special Offer
            </Badge>
          )}

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link to={`/room/${room.id}`}>
              <Button variant="secondary" className="bg-white/90 text-neutral-900 hover:bg-white">
                Quick View
              </Button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl mb-2 text-neutral-900">{room.name}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">{room.description}</p>
          </div>

          {/* Room Details */}
          <div className="flex items-center gap-4 mb-4 text-sm text-neutral-500">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{room.maxGuests} guests</span>
            </div>
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{room.bedType}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{room.bathrooms} bath</span>
            </div>
          </div>

          {/* Size */}
          <div className="mb-4">
            <span className="text-sm text-neutral-500">{room.size}</span>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-6">
            {room.amenities.slice(0, 3).map((amenity) => {
              const IconComponent = amenityIcons[amenity.toLowerCase()] || Coffee;
              return (
                <div key={amenity} className="flex items-center gap-1 text-xs text-neutral-500">
                  <IconComponent className="h-3 w-3" />
                  <span className="capitalize">{amenity}</span>
                </div>
              );
            })}
            {room.amenities.length > 3 && (
              <span className="text-xs text-neutral-500">
                +{room.amenities.length - 3} more
              </span>
            )}
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div>
              {room.originalPrice && (
                <span className="text-sm text-neutral-400 line-through mr-2">
                  ${room.originalPrice}
                </span>
              )}
              <span className="text-2xl text-neutral-900">${room.price}</span>
              <span className="text-sm text-neutral-500 ml-1">/ night</span>
            </div>
            <Link to="/booking">
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-6">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}