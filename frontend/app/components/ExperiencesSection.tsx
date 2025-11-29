"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "./Router";

export function ExperiencesSection() {
  const experiences = [
    {
      id: "1",
      title: "Culinary Excellence",
      description: "Savor exquisite cuisine crafted by our award-winning chefs, featuring locally-sourced ingredients and innovative techniques.",
      image: "https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzY4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "Explore Dining",
      route: "/dining",
    },
    {
      id: "2",
      title: "Wellness & Spa",
      description: "Rejuvenate your mind and body with our comprehensive wellness programs and luxurious spa treatments.",
      image: "https://images.unsplash.com/photo-1712701063446-238edd944358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHdlbGxuZXNzJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1ODgxODkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "Book Spa",
      route: "/spa",
    },
  ];

  return (
    <section className="py-24 bg-white">
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
            Curated Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
          >
            Immerse yourself in carefully crafted experiences that celebrate the art of hospitality
            and create lasting memories.
          </motion.p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl md:text-3xl mb-4">{experience.title}</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    <Link to={experience.route}>
                      <Button 
                        variant="secondary" 
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-neutral-900 transition-all duration-300"
                      >
                        {experience.link}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}