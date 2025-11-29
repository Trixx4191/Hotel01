import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Accessibility, Phone, Mail } from "lucide-react";

export function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl mb-8 text-neutral-900 font-light">Accessibility</h1>
          
          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700 mb-12">
            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Our Commitment</h2>
              <p className="leading-relaxed">
                Maison Royal is committed to ensuring accessibility for all guests. We strive to 
                provide an inclusive environment and exceptional service for guests with disabilities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Accessible Accommodations</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>ADA-compliant rooms with roll-in showers</li>
                <li>Visual and audible alarm systems</li>
                <li>Accessible bathroom fixtures and grab bars</li>
                <li>Lowered closet rods and peepholes</li>
                <li>Wheelchair-accessible pathways throughout property</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Services & Amenities</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Accessible parking spaces near entrance</li>
                <li>Service animal accommodations</li>
                <li>TTY/TDD phones available upon request</li>
                <li>Assistive listening devices for meetings</li>
                <li>Braille and large-print materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Website Accessibility</h2>
              <p className="leading-relaxed">
                We are continually improving the accessibility of our website to meet WCAG 2.1 
                Level AA standards. If you experience any accessibility issues, please contact us.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-neutral-50">
            <div className="text-center">
              <Accessibility className="h-12 w-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-2xl mb-4 text-neutral-900">Need Assistance?</h3>
              <p className="text-neutral-600 mb-6">
                Our team is here to help arrange any accommodations you may need
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: +1 (234) 567-8900
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
