import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Printer, Wifi, Monitor, Coffee } from "lucide-react";

export function BusinessCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl mb-4 text-neutral-900 font-light text-center">Business Center</h1>
          <p className="text-xl text-neutral-600 text-center mb-12">Fully equipped workspace for business travelers</p>
          
          <Card className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <Wifi className="h-8 w-8 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">High-Speed Internet</h3>
                  <p className="text-neutral-600">Ultra-fast fiber connection</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Printer className="h-8 w-8 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Printing Services</h3>
                  <p className="text-neutral-600">Full color printing and scanning</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Monitor className="h-8 w-8 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Private Workstations</h3>
                  <p className="text-neutral-600">Desktop computers with software</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Coffee className="h-8 w-8 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Complimentary Refreshments</h3>
                  <p className="text-neutral-600">Coffee, tea, and snacks</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-neutral-900 mb-2">Open 6:00 AM - 10:00 PM Daily</p>
              <p className="text-neutral-600 mb-6">Complimentary for all guests</p>
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">Reserve a Workstation</Button>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default BusinessCenterPage;
