import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Users, 
  Presentation, 
  Heart, 
  Calendar,
  MapPin,
  Wifi,
  Monitor,
  Coffee,
  Car,
  Utensils,
  Camera,
  Music,
  Flower,
  Clock
} from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function MeetingsEventsPage() {
  const venues = [
    {
      id: "1",
      name: "Grand Ballroom",
      description: "Our flagship venue featuring soaring ceilings, crystal chandeliers, and panoramic city views.",
      capacity: {
        theater: 400,
        banquet: 280,
        reception: 450,
        classroom: 200,
      },
      size: "4,500 sq ft",
      image: "https://images.unsplash.com/photo-1505845753232-f74a87b62db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG1lZXRpbmclMjBjb25mZXJlbmNlJTIwcm9vbXxlbnwxfHx8fDE3NTg4MTc3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["A/V equipment", "High-speed WiFi", "Climate control", "Valet parking"],
      idealFor: ["Galas", "Large conferences", "Award ceremonies", "Product launches"],
    },
    {
      id: "2",
      name: "Executive Boardroom",
      description: "Intimate boardroom perfect for high-level meetings and strategic discussions.",
      capacity: {
        boardroom: 16,
        uShape: 12,
      },
      size: "450 sq ft",
      image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["Video conferencing", "Presentation screen", "Conference phone", "Executive catering"],
      idealFor: ["Board meetings", "Strategic planning", "VIP negotiations", "Executive retreats"],
    },
    {
      id: "3",
      name: "Rooftop Terrace",
      description: "Open-air venue with stunning skyline views, perfect for memorable celebrations.",
      capacity: {
        reception: 200,
        banquet: 120,
        cocktail: 250,
      },
      size: "2,800 sq ft",
      image: "https://images.unsplash.com/photo-1714648775497-9f54f75eb3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhdGhyb29tJTIwbWFyYmxlfGVufDF8fHx8MTc1ODczNTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["Weather protection", "Outdoor bar", "City views", "Garden setting"],
      idealFor: ["Weddings", "Cocktail parties", "Summer events", "Photography"],
    },
    {
      id: "4",
      name: "Innovation Lab",
      description: "Modern collaborative space designed for creativity and innovation.",
      capacity: {
        classroom: 40,
        workshop: 32,
        networking: 60,
      },
      size: "800 sq ft",
      image: "https://images.unsplash.com/photo-1718359760007-4b11d377689c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGdhbGxlcnklMjBhcnR8ZW58MXx8fHwxNzU4ODE3Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["Interactive displays", "Modular furniture", "Breakout areas", "Tech support"],
      idealFor: ["Workshops", "Innovation sessions", "Team building", "Training programs"],
    },
  ];

  const packages = {
    meetings: [
      {
        name: "Executive Package",
        price: "$125",
        duration: "Full day",
        includes: [
          "Venue rental (8 hours)",
          "A/V equipment setup",
          "Welcome coffee service",
          "Working lunch",
          "Afternoon refreshments",
          "Dedicated event coordinator",
        ],
      },
      {
        name: "Conference Package",
        price: "$85",
        duration: "Half day",
        includes: [
          "Venue rental (4 hours)",
          "Basic A/V equipment",
          "Coffee breaks (2)",
          "Event support staff",
          "High-speed WiFi",
          "Parking validation",
        ],
      },
    ],
    weddings: [
      {
        name: "Platinum Wedding",
        price: "$8,500",
        duration: "Full weekend",
        includes: [
          "Reception venue (6 hours)",
          "Ceremony space",
          "Bridal suite preparation",
          "Wedding coordinator",
          "Floral arrangements",
          "Photography package",
          "Guest accommodation rates",
        ],
      },
      {
        name: "Intimate Celebration",
        price: "$4,200",
        duration: "Reception only",
        includes: [
          "Private dining room",
          "Cocktail hour space",
          "Custom menu planning",
          "Wedding cake service",
          "Champagne toast",
          "Decorative lighting",
        ],
      },
    ],
  };

  const services = [
    {
      icon: Monitor,
      title: "Audio Visual",
      description: "State-of-the-art A/V equipment with technical support",
    },
    {
      icon: Utensils,
      title: "Catering",
      description: "Custom menus from our award-winning culinary team",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Valet parking and group transportation coordination",
    },
    {
      icon: Flower,
      title: "Floral Design",
      description: "Beautiful arrangements and event decoration",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional event photography and videography",
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Live music, DJ services, and entertainment booking",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1505845753232-f74a87b62db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG1lZXRpbmclMjBjb25mZXJlbmNlJTIwcm9vbXxlbnwxfHx8fDE3NTg4MTc3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Meetings and events"
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
            Meetings & Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
          >
            Exceptional venues for unforgettable occasions
          </motion.p>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light">
              Exceptional Venues
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From intimate boardrooms to grand ballrooms, our versatile spaces are designed 
              to accommodate events of every scale and style.
            </p>
          </div>

          <div className="space-y-12">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <ImageWithFallback
                        src={venue.image}
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl mb-4 text-neutral-900">{venue.name}</h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {venue.description}
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg mb-3 text-neutral-800">Capacity</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {Object.entries(venue.capacity).map(([setup, cap]) => (
                            <div key={setup} className="flex justify-between">
                              <span className="text-neutral-500 capitalize">{setup}:</span>
                              <span className="text-neutral-900">{cap} guests</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 text-sm text-neutral-500">
                          Total space: {venue.size}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm text-neutral-500 mb-2">Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {venue.amenities.map((amenity) => (
                            <Badge key={amenity} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm text-neutral-500 mb-2">Ideal For</h4>
                        <div className="flex flex-wrap gap-2">
                          {venue.idealFor.map((use) => (
                            <Badge key={use} className="bg-amber-100 text-amber-800 text-xs">
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="bg-neutral-900 hover:bg-neutral-800 text-white flex-1 sm:flex-initial">
                          Request Quote
                        </Button>
                        <Button variant="outline">Virtual Tour</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light">
              Event Packages
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Comprehensive packages designed to make planning your event effortless and memorable.
            </p>
          </div>

          <Tabs defaultValue="meetings" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-12">
              <TabsTrigger value="meetings" className="flex items-center gap-2">
                <Presentation className="h-4 w-4" />
                Business
              </TabsTrigger>
              <TabsTrigger value="weddings" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Weddings
              </TabsTrigger>
            </TabsList>

            {Object.entries(packages).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {items.map((pkg, index) => (
                    <motion.div
                      key={pkg.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h3 className="text-2xl mb-2 text-neutral-900">{pkg.name}</h3>
                            <div className="flex items-center gap-2 text-neutral-500">
                              <Clock className="h-4 w-4" />
                              <span>{pkg.duration}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl text-neutral-900">{pkg.price}</div>
                            <div className="text-sm text-neutral-500">per event</div>
                          </div>
                        </div>
                        
                        <div className="mb-8">
                          <h4 className="text-sm text-neutral-500 mb-4">Package Includes:</h4>
                          <ul className="space-y-2">
                            {pkg.includes.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
                          Select Package
                        </Button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light">
              Additional Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Enhance your event with our comprehensive range of professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg mb-3 text-neutral-900">{service.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-light">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            Our dedicated events team is here to help you create an unforgettable experience. 
            Let us handle every detail while you focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-3">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}