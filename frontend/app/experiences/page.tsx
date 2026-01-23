import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Waves, 
  Mountain, 
  Compass, 
  Camera, 
  Music, 
  Palette, 
  MapPin, 
  Clock,
  Users,
  Star,
  Calendar
} from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ExperiencesPage() {
  const experiences = {
    wellness: [
      {
        id: "1",
        name: "Signature Spa Retreat",
        description: "A transformative 4-hour journey combining traditional techniques with modern wellness.",
        duration: "4 hours",
        price: "$450",
        image: "https://images.unsplash.com/photo-1667235195726-a7c440bca9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc1ODc2ODM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
        includes: ["Full body massage", "Facial treatment", "Private relaxation", "Healthy lunch"],
        maxGuests: 2,
      },
      {
        id: "2",
        name: "Couples Wellness Journey",
        description: "Reconnect and rejuvenate together with our intimate couples spa experience.",
        duration: "3 hours",
        price: "$680",
        image: "https://images.unsplash.com/photo-1714648775497-9f54f75eb3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhdGhyb29tJTIwbWFyYmxlfGVufDF8fHx8MTc1ODczNTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        includes: ["Side-by-side massage", "Private suite", "Champagne service", "Rose petals"],
        maxGuests: 2,
      },
    ],
    cultural: [
      {
        id: "3",
        name: "Art Gallery Tour",
        description: "Explore the city's finest galleries with our knowledgeable art curator.",
        duration: "3 hours",
        price: "$125",
        image: "https://images.unsplash.com/photo-1718359760007-4b11d377689c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGdhbGxlcnklMjBhcnR8ZW58MXx8fHwxNzU4ODE3Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        includes: ["Private guide", "Gallery admissions", "Light refreshments", "Art history insights"],
        maxGuests: 8,
      },
      {
        id: "4",
        name: "Historic Architecture Walk",
        description: "Discover the architectural treasures that define our city's character.",
        duration: "2.5 hours",
        price: "$85",
        image: "https://images.unsplash.com/photo-1713936025889-e7920f0fb952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1ODY4ODgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        includes: ["Expert guide", "Historical insights", "Photo opportunities", "Small group"],
        maxGuests: 12,
      },
    ],
    adventure: [
      {
        id: "5",
        name: "Scenic Helicopter Tour",
        description: "See the city from above with breathtaking aerial views and professional photography.",
        duration: "45 minutes",
        price: "$395",
        image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        includes: ["Private helicopter", "Professional pilot", "Aerial photography", "Champagne toast"],
        maxGuests: 3,
      },
      {
        id: "6",
        name: "Private Yacht Charter",
        description: "Luxury sailing experience with gourmet catering and stunning coastal views.",
        duration: "4 hours",
        price: "$1,200",
        image: "https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzY4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        includes: ["Private yacht", "Captain & crew", "Gourmet lunch", "Open bar"],
        maxGuests: 8,
      },
    ],
  };

  const seasonalEvents = [
    {
      title: "Summer Jazz Series",
      date: "Every Friday, June - August",
      description: "Live jazz performances on our rooftop terrace",
      image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Wine Harvest Celebration",
      date: "September 15-30",
      description: "Two weeks of exclusive wine tastings and vineyard tours",
      image: "https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzY4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Holiday Gala",
      date: "December 31",
      description: "New Year's Eve celebration with live entertainment",
      image: "https://images.unsplash.com/photo-1714648775497-9f54f75eb3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhdGhyb29tJTIwbWFyYmxlfGVufDF8fHx8MTc1ODczNTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1667235195726-a7c440bca9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc1ODc2ODM1NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury experiences"
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
            Curated Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
          >
            Immersive journeys designed to create lasting memories
          </motion.p>
        </div>
      </section>

      {/* Experiences Tabs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light">
              Discover Your Perfect Experience
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From wellness retreats to cultural immersions, our carefully curated experiences 
              are designed to enrich your stay and create unforgettable moments.
            </p>
          </div>

          <Tabs defaultValue="wellness" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-12">
              <TabsTrigger value="wellness" className="flex items-center gap-2">
                <Waves className="h-4 w-4" />
                <span className="hidden sm:inline">Wellness</span>
              </TabsTrigger>
              <TabsTrigger value="cultural" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Cultural</span>
              </TabsTrigger>
              <TabsTrigger value="adventure" className="flex items-center gap-2">
                <Mountain className="h-4 w-4" />
                <span className="hidden sm:inline">Adventure</span>
              </TabsTrigger>
            </TabsList>

            {Object.entries(experiences).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {items.map((experience, index) => (
                    <motion.div
                      key={experience.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                        <div className="relative h-64">
                          <ImageWithFallback
                            src={experience.image}
                            alt={experience.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-white/90 text-neutral-800">
                              {experience.price}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl mb-2 text-neutral-900">{experience.name}</h3>
                          <p className="text-neutral-600 mb-4">{experience.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-neutral-500">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{experience.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>Up to {experience.maxGuests} guests</span>
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
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Seasonal Events */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light">
              Seasonal Events
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Join us for exclusive seasonal celebrations and special events throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl mb-3 text-neutral-900">{event.title}</h3>
                    <p className="text-neutral-600 mb-4">{event.description}</p>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Experiences */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-neutral-900 font-light">
                Bespoke Experiences
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Our dedicated concierge team specializes in creating personalized experiences 
                tailored to your unique interests and preferences. From private celebrations 
                to exclusive access experiences, we make the extraordinary possible.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-amber-600" />
                  <span>Personalized itinerary planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Compass className="h-5 w-5 text-amber-600" />
                  <span>Exclusive access arrangements</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-amber-600" />
                  <span>Private group experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-amber-600" />
                  <span>Professional documentation</span>
                </div>
              </div>
              
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8">
                Plan My Experience
              </Button>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677129666186-d29eba893fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmNpZXJnZSUyMHNlcnZpY2V8ZW58MXx8fHwxNzU4ODE3Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Concierge service"
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