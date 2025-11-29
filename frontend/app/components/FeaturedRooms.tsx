import { RoomCard } from "./RoomCard";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Link } from "./Router";

export function FeaturedRooms() {
  const featuredRooms = [
    {
      id: "1",
      name: "Deluxe King Suite",
      description: "Sophisticated elegance with panoramic city views and premium amenities for the discerning traveler.",
      price: 425,
      originalPrice: 520,
      image: "https://images.unsplash.com/photo-1563418536438-e08af0d644ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBzdWl0ZSUyMG1vZGVybnxlbnwxfHx8fDE3NTg4MDExMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["wifi", "parking", "coffee", "room service", "spa access"],
      maxGuests: 2,
      bedType: "King Bed",
      bathrooms: 1,
      size: "450 sq ft",
      isSpecialOffer: true,
    },
    {
      id: "2",
      name: "Executive Ocean View",
      description: "Wake up to breathtaking ocean vistas in this spacious suite with contemporary furnishings.",
      price: 680,
      image: "https://images.unsplash.com/photo-1714648775497-9f54f75eb3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhdGhyb29tJTIwbWFyYmxlfGVufDF8fHx8MTc1ODczNTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["wifi", "parking", "coffee", "balcony", "ocean view"],
      maxGuests: 3,
      bedType: "King Bed",
      bathrooms: 2,
      size: "600 sq ft",
    },
    {
      id: "3",
      name: "Presidential Suite",
      description: "The epitome of luxury with separate living areas, private terrace, and dedicated concierge service.",
      price: 1250,
      image: "https://images.unsplash.com/photo-1713936025889-e7920f0fb952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1ODY4ODgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["wifi", "parking", "coffee", "terrace", "concierge", "butler"],
      maxGuests: 4,
      bedType: "King + Sofa Bed",
      bathrooms: 3,
      size: "1200 sq ft",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light"
          >
            Exceptional Accommodations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
          >
            Each room and suite is thoughtfully designed to provide an unparalleled experience,
            blending modern comfort with timeless sophistication.
          </motion.p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/rooms">
            <Button 
              variant="outline" 
              className="border-neutral-300 text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 px-8 py-3 transition-all duration-300"
            >
              View All Rooms & Suites
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}