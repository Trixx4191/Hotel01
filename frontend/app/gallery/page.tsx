"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Camera, Download, Share2, ZoomIn } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const galleryCategories = {
    rooms: [
      {
        id: "1",
        title: "Presidential Suite",
        image: "https://images.unsplash.com/photo-1563418536438-e08af0d644ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBzdWl0ZSUyMG1vZGVybnxlbnwxfHx8fDE3NTg4MDExMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "2",
        title: "Marble Bathroom",
        image: "https://images.unsplash.com/photo-1714648775497-9f54f75eb3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhdGhyb29tJTIwbWFyYmxlfGVufDF8fHx8MTc1ODczNTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "3",
        title: "Deluxe King Suite",
        image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "4",
        title: "Spa Suite",
        image: "https://images.unsplash.com/photo-1712701063446-238edd944358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHdlbGxuZXNzJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1ODgxODkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "5",
        title: "Executive Bedroom",
        image: "https://images.unsplash.com/photo-1713936025889-e7920f0fb952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1ODY4ODgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "6",
        title: "Garden View Room",
        image: "https://images.unsplash.com/photo-1731336479432-3eb5fdb3ab1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHBvb2x8ZW58MXx8fHwxNzYzOTEzODU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    dining: [
      {
        id: "7",
        title: "Le Jardin Restaurant",
        image: "https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzY4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "8",
        title: "Rooftop Bar",
        image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "9",
        title: "Café Royal",
        image: "https://images.unsplash.com/photo-1718873003411-ea2e7f6fc6f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNlYXJjaCUyMGxvYmJ5fGVufDF8fHx8MTc2MzkxMzg1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "10",
        title: "Private Dining",
        image: "https://images.unsplash.com/photo-1761023717432-572bd8f780e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJvb2tpbmclMjByZXNlcnZhdGlvbnxlbnwxfHx8fDE3NjM5MTM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    facilities: [
      {
        id: "11",
        title: "Spa & Wellness Center",
        image: "https://images.unsplash.com/photo-1712701063446-238edd944358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHdlbGxuZXNzJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1ODgxODkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "12",
        title: "Infinity Pool",
        image: "https://images.unsplash.com/photo-1731336479432-3eb5fdb3ab1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHBvb2x8ZW58MXx8fHwxNzYzOTEzODU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "13",
        title: "Grand Ballroom",
        image: "https://images.unsplash.com/photo-1739854711158-d4dee8460f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGNvbmZlcmVuY2UlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NTg4MTg5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "14",
        title: "Fitness Center",
        image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    exterior: [
      {
        id: "15",
        title: "Hotel Facade",
        image: "https://images.unsplash.com/photo-1713936025889-e7920f0fb952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1ODY4ODgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "16",
        title: "Garden Terrace",
        image: "https://images.unsplash.com/photo-1718359760007-4b11d377689c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGdhbGxlcnklMjBhcnR8ZW58MXx8fHwxNzYzOTEzODU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "17",
        title: "Courtyard",
        image: "https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzY4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: "18",
        title: "Night View",
        image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1718359760007-4b11d377689c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGdhbGxlcnklMjBhcnR8ZW58MXx8fHwxNzYzOTEzODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-4 font-light"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
          >
            A visual journey through our world of luxury
          </motion.p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs defaultValue="rooms" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto mb-12">
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="dining">Dining</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="exterior">Exterior</TabsTrigger>
            </TabsList>

            {Object.entries(galleryCategories).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                      onClick={() => setLightboxImage(item.image)}
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white">
                          <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </Button>
          <ImageWithFallback
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-neutral-900 font-light">
            Experience It Yourself
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Book your stay and discover the luxury that awaits
          </p>
          <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8">
            Book Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}