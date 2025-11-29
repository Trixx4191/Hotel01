import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ConciergePage() {
  const services = [
    "Restaurant reservations",
    "Theater and event tickets",
    "Transportation arrangements",
    "Local recommendations",
    "Special occasion planning",
    "Tour bookings",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGNvbmNpZXJnZSUyMHNlcnZpY2V8ZW58MXx8fHwxNzYzODQ0MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Concierge Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl mb-4 font-light"
          >
            Concierge Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Your personal guide to the extraordinary
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl mb-8 text-neutral-900 font-light">How We Can Help</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  <span className="text-neutral-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-neutral-600">
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-amber-600" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-amber-600" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-amber-600" />
                <span>concierge@maisonroyal.com</span>
              </div>
            </div>

            <Button className="w-full mt-8 bg-neutral-900 hover:bg-neutral-800 text-white">
              Contact Concierge
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
