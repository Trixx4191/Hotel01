import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Plane, Car, Clock } from "lucide-react";

export function AirportTransferPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl mb-4 text-neutral-900 font-light text-center">Airport Transfer</h1>
          <p className="text-xl text-neutral-600 text-center mb-12">Luxury transportation to and from the airport</p>
          
          <Card className="p-12">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Plane className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Flight Tracking</h3>
                  <p className="text-neutral-600">We monitor your flight to ensure timely pickup</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Luxury Vehicles</h3>
                  <p className="text-neutral-600">Premium sedans and SUVs available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">24/7 Availability</h3>
                  <p className="text-neutral-600">Service available around the clock</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl text-neutral-900 mb-2">From $120 one way</p>
              <p className="text-neutral-600 mb-6">Based on vehicle type and destination</p>
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">Book Transfer</Button>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default AirportTransferPage;
