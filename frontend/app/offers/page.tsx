import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tag, Calendar, Gift } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function OffersPage() {
  const offers = [
    {
      id: "1",
      title: "Summer Escape Package",
      discount: "30% OFF",
      validUntil: "August 31, 2025",
      description: "Enjoy luxury accommodations with complimentary breakfast and spa credits",
      image: "https://images.unsplash.com/photo-1563418536438-e08af0d644ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBzdWl0ZSUyMG1vZGVybnxlbnwxfHx8fDE3NTg4MDExMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: ["3 nights accommodation", "Daily breakfast for two", "$200 spa credit", "Late checkout"],
    },
    {
      id: "2",
      title: "Romantic Getaway",
      discount: "25% OFF",
      validUntil: "December 24, 2025",
      description: "Perfect for couples seeking an intimate luxury experience",
      image: "https://images.unsplash.com/photo-1714648775497-9f54f75eb3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhdGhyb29tJTIwbWFyYmxlfGVufDF8fHx8MTc1ODczNTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      includes: ["Suite upgrade", "Champagne & roses", "Couples massage", "Candlelit dinner"],
    },
    {
      id: "3",
      title: "Extended Stay Deal",
      discount: "40% OFF",
      validUntil: "Ongoing",
      description: "Book 5 nights or more and enjoy substantial savings",
      image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg3ODIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: ["Flexible rates", "Complimentary parking", "Daily breakfast", "Welcome amenity"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzY4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Special offers"
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
            Special Offers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Exclusive packages and seasonal promotions
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-80 lg:h-auto">
                      <ImageWithFallback
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-amber-600 text-white text-lg px-4 py-2">
                        {offer.discount}
                      </Badge>
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl mb-4 text-neutral-900">{offer.title}</h3>
                      <div className="flex items-center gap-2 text-neutral-500 mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>Valid until {offer.validUntil}</span>
                      </div>
                      <p className="text-neutral-600 mb-6">{offer.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm text-neutral-500 mb-3">Package Includes:</h4>
                        <ul className="space-y-2">
                          {offer.includes.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-neutral-600">
                              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">
                        Book This Offer
                      </Button>
                    </div>
                  </div>
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
