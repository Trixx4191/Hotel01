import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Car, Shield, Clock } from "lucide-react";

export function ValetPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl mb-4 text-neutral-900 font-light text-center">Valet Parking</h1>
          <p className="text-xl text-neutral-600 text-center mb-12">Professional valet service for your convenience</p>
          
          <Card className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Car className="h-12 w-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-lg mb-2">Premium Care</h3>
                <p className="text-neutral-600">Professional handling of all vehicles</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-lg mb-2">Fully Insured</h3>
                <p className="text-neutral-600">Complete protection and security</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-lg mb-2">24/7 Service</h3>
                <p className="text-neutral-600">Available whenever you need</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl text-neutral-900 mb-2">$45 per day</p>
              <p className="text-neutral-600 mb-6">Complimentary for suite guests</p>
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">Request Valet</Button>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default ValetPage;
