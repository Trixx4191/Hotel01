import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Heart, Home, Utensils, Sparkles } from "lucide-react";

export function PetServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl mb-4 text-neutral-900 font-light text-center">Pet Services</h1>
          <p className="text-xl text-neutral-600 text-center mb-12">Luxury accommodations for your furry companions</p>
          
          <Card className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <Home className="h-8 w-8 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Pet-Friendly Rooms</h3>
                  <p className="text-neutral-600">Specially designated accommodations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Utensils className="h-8 w-8 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Gourmet Pet Menu</h3>
                  <p className="text-neutral-600">Nutritious meals prepared fresh</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="h-8 w-8 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Pet Amenities</h3>
                  <p className="text-neutral-600">Beds, bowls, and toys provided</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Pet Sitting</h3>
                  <p className="text-neutral-600">Professional care services available</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl text-neutral-900 mb-2">$75 per stay</p>
              <p className="text-neutral-600 mb-6">Maximum 2 pets, up to 50 lbs each</p>
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">Book Pet-Friendly Room</Button>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default PetServicesPage;
