import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Sparkles, Clock, Users, Flower2 } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SpaPage() {
  const treatments = [
    {
      name: "Signature Massage",
      duration: "90 min",
      price: "$280",
      description: "Our signature full body massage combining Swedish and deep tissue techniques",
    },
    {
      name: "Royal Facial",
      duration: "75 min",
      price: "$245",
      description: "Luxurious facial treatment with premium skincare products",
    },
    {
      name: "Hot Stone Therapy",
      duration: "80 min",
      price: "$295",
      description: "Therapeutic massage using heated volcanic stones",
    },
    {
      name: "Aromatherapy Session",
      duration: "60 min",
      price: "$220",
      description: "Relaxing treatment with essential oils tailored to your needs",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1712701063446-238edd944358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHdlbGxuZXNzJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1ODgxODkzOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Spa & Wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-4 font-light"
          >
            Spa & Wellness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Rejuvenate your mind, body, and soul
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-neutral-900 font-light">Our Treatments</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Experience world-class spa treatments designed to restore and revitalize
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl text-neutral-900">{treatment.name}</h3>
                    <Badge className="bg-amber-100 text-amber-800">{treatment.price}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500 mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{treatment.duration}</span>
                  </div>
                  <p className="text-neutral-600 mb-6">{treatment.description}</p>
                  <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
                    Book Treatment
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
