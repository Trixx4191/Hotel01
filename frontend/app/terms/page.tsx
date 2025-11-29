import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl mb-8 text-neutral-900 font-light">Terms of Service</h1>
          
          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700">
            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Reservations</h2>
              <p className="leading-relaxed">
                All reservations are subject to availability and confirmation. A valid credit card 
                is required at the time of booking to guarantee your reservation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Cancellation Policy</h2>
              <p className="leading-relaxed">
                Cancellations must be made at least 48 hours prior to arrival to avoid charges. 
                Late cancellations or no-shows will be charged one night's accommodation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Check-In & Check-Out</h2>
              <p className="leading-relaxed">
                Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and 
                late check-out may be available upon request and subject to availability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Guest Conduct</h2>
              <p className="leading-relaxed">
                Guests are expected to conduct themselves in a manner that respects other guests 
                and hotel property. We reserve the right to refuse service or remove guests who 
                violate our policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Liability</h2>
              <p className="leading-relaxed">
                The hotel is not responsible for loss or damage to guests' personal property. 
                Safe deposit boxes are available at the front desk for valuables.
              </p>
            </div>

            <div className="text-sm text-neutral-500 pt-8 border-t border-neutral-200">
              Last updated: November 23, 2025
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
