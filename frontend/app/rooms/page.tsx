"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RoomCard } from "../components/RoomCard";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function RoomsSuitesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filterCategory, setFilterCategory] = useState("all");

  const allRooms = [
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
      category: "suite"
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
      category: "suite"
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
      category: "presidential"
    },
    {
      id: "4",
      name: "Classic Double Room",
      description: "Comfort and style in a thoughtfully designed space with modern amenities and elegant furnishings.",
      price: 285,
      image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["wifi", "parking", "coffee"],
      maxGuests: 2,
      bedType: "Double Bed",
      bathrooms: 1,
      size: "320 sq ft",
      category: "standard"
    },
    {
      id: "5",
      name: "Junior Suite",
      description: "A perfect blend of space and sophistication with separate seating area and premium finishes.",
      price: 385,
      image: "https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzY4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["wifi", "parking", "coffee", "seating area"],
      maxGuests: 2,
      bedType: "King Bed",
      bathrooms: 1,
      size: "380 sq ft",
      category: "suite"
    },
    {
      id: "6",
      name: "Garden View Room",
      description: "Serene accommodation overlooking our beautifully landscaped gardens with peaceful ambiance.",
      price: 325,
      image: "https://images.unsplash.com/photo-1712701063446-238edd944358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHdlbGxuZXNzJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1ODgxODkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["wifi", "parking", "coffee", "garden view"],
      maxGuests: 2,
      bedType: "Queen Bed",
      bathrooms: 1,
      size: "350 sq ft",
      category: "standard"
    }
  ];

  const filteredRooms = filterCategory === "all" 
    ? allRooms 
    : allRooms.filter(room => room.category === filterCategory);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury hotel rooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl mb-4 font-light"
          >
            Rooms & Suites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Discover your perfect sanctuary, designed for comfort and refined luxury
          </motion.p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Filters and Controls */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex flex-wrap gap-4">
              <Button
                variant={filterCategory === "all" ? "default" : "outline"}
                onClick={() => setFilterCategory("all")}
                className={filterCategory === "all" ? "bg-neutral-900 text-white" : ""}
              >
                All Rooms
              </Button>
              <Button
                variant={filterCategory === "standard" ? "default" : "outline"}
                onClick={() => setFilterCategory("standard")}
                className={filterCategory === "standard" ? "bg-neutral-900 text-white" : ""}
              >
                Standard Rooms
              </Button>
              <Button
                variant={filterCategory === "suite" ? "default" : "outline"}
                onClick={() => setFilterCategory("suite")}
                className={filterCategory === "suite" ? "bg-neutral-900 text-white" : ""}
              >
                Suites
              </Button>
              <Button
                variant={filterCategory === "presidential" ? "default" : "outline"}
                onClick={() => setFilterCategory("presidential")}
                className={filterCategory === "presidential" ? "bg-neutral-900 text-white" : ""}
              >
                Presidential
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-neutral-900 text-white" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-neutral-900 text-white" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          <div className="text-neutral-600">
            Showing {filteredRooms.length} of {allRooms.length} accommodations
          </div>
        </div>

        {/* Rooms Grid */}
        <div className={
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-8"
        }>
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-neutral-900 text-white p-12">
            <h3 className="text-2xl md:text-3xl mb-4 font-light">
              Need Assistance?
            </h3>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Our concierge team is available 24/7 to help you find the perfect accommodation 
              and arrange any special requests for your stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-neutral-900 hover:bg-neutral-100">
                Call Concierge
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900">
                Live Chat
              </Button>
            </div>
          </Card>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
