import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Clock, MapPin, Phone, Star, Utensils, Wine, Coffee, Users } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function DiningPage() {
  const restaurants = [
    {
      id: "1",
      name: "Le Jardin",
      description: "Award-winning fine dining restaurant featuring contemporary French cuisine with locally-sourced ingredients.",
      cuisine: "French Contemporary",
      priceRange: "$$$$",
      hours: "6:00 PM - 10:30 PM",
      phone: "+1 (234) 567-8901",
      image: "https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzY4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Michelin Star", "Wine Cellar", "Private Dining"],
      capacity: 60,
      dressCode: "Formal",
    },
    {
      id: "2",
      name: "The Terrace",
      description: "Casual outdoor dining with panoramic city views, serving modern American cuisine and craft cocktails.",
      cuisine: "Modern American",
      priceRange: "$$$",
      hours: "11:30 AM - 11:00 PM",
      phone: "+1 (234) 567-8902",
      image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Outdoor Seating", "City Views", "Craft Cocktails"],
      capacity: 120,
      dressCode: "Smart Casual",
    },
    {
      id: "3",
      name: "Café Royal",
      description: "Elegant café serving artisanal coffee, fresh pastries, and light meals throughout the day.",
      cuisine: "Café & Bistro",
      priceRange: "$$",
      hours: "6:00 AM - 6:00 PM",
      phone: "+1 (234) 567-8903",
      image: "https://images.unsplash.com/photo-1714648775497-9f54f75eb3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhdGhyb29tJTIwbWFyYmxlfGVufDF8fHx8MTc1ODczNTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Artisan Coffee", "Fresh Pastries", "All Day Dining"],
      capacity: 40,
      dressCode: "Casual",
    },
  ];

  const experiences = [
    {
      title: "Wine Tasting Experience",
      description: "Guided tasting of rare vintages from our exclusive wine cellar",
      duration: "90 minutes",
      price: "$125",
      includes: ["6 wine selections", "Cheese pairings", "Sommelier guide"],
    },
    {
      title: "Chef's Table Experience",
      description: "Interactive dining experience with our executive chef",
      duration: "3 hours",
      price: "$295",
      includes: ["7-course tasting", "Wine pairings", "Kitchen tour"],
    },
    {
      title: "Mixology Masterclass",
      description: "Learn to craft signature cocktails with our master bartender",
      duration: "2 hours",
      price: "$85",
      includes: ["4 cocktails", "Recipe cards", "Bar tools"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzY4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury dining"
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
            Culinary Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
          >
            A journey through exceptional flavors and innovative cuisine
          </motion.p>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light">
              Our Restaurants
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From intimate fine dining to casual al fresco experiences, each venue offers 
              a unique culinary journey crafted by world-renowned chefs.
            </p>
          </div>

          <div className="space-y-12">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <ImageWithFallback
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-neutral-800">
                          {restaurant.priceRange}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl mb-2 text-neutral-900">{restaurant.name}</h3>
                        <p className="text-amber-600 mb-4">{restaurant.cuisine}</p>
                      </div>
                      
                      <p className="text-neutral-600 mb-6 leading-relaxed">
                        {restaurant.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm text-neutral-500">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{restaurant.hours}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{restaurant.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>Seats {restaurant.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Utensils className="h-4 w-4" />
                          <span>{restaurant.dressCode}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {restaurant.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="bg-neutral-900 hover:bg-neutral-800 text-white flex-1 sm:flex-initial">
                          Make Reservation
                        </Button>
                        <Button variant="outline">View Menu</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Experiences */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light">
              Culinary Experiences
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Immerse yourself in unique dining experiences that go beyond the ordinary meal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl mb-4 text-neutral-900">{experience.title}</h3>
                  <p className="text-neutral-600 mb-6">{experience.description}</p>
                  
                  <div className="space-y-3 mb-6 text-sm text-neutral-500">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="text-neutral-900 font-medium">{experience.price}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm text-neutral-500 mb-2">Includes:</h4>
                    <ul className="space-y-1 text-sm text-neutral-600">
                      {experience.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
                    Book Experience
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light">
                Private Dining
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Host intimate gatherings in our exclusive private dining rooms, each designed 
                to create memorable experiences for your most important celebrations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-amber-600" />
                  <span>Personalized menu creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wine className="h-5 w-5 text-amber-600" />
                  <span>Sommelier wine pairing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-amber-600" />
                  <span>Dedicated service team</span>
                </div>
                <div className="flex items-center gap-3">
                  <Utensils className="h-5 w-5 text-amber-600" />
                  <span>Custom table settings</span>
                </div>
              </div>
              
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8">
                Inquire About Private Dining
              </Button>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Private dining room"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}