import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Clock } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function RoomServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1610643875911-61395c0d7cf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzkxMzg2MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Room Service"
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
            Room Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Gourmet dining in the comfort of your room
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4 text-neutral-900 font-light">24-Hour Service</h2>
              <p className="text-neutral-600">
                Our full menu is available anytime, day or night
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <Clock className="h-6 w-6 text-amber-600" />
              <span className="text-lg text-neutral-700">Available 24 hours daily</span>
            </div>

            <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
              Order Now
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default RoomServicePage;
