import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl mb-8 text-neutral-900 font-light">Privacy Policy</h1>
          
          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700">
            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information that you provide directly to us, including when you make a reservation, 
                create an account, communicate with us, or participate in surveys or promotions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                process your reservations, communicate with you, and personalize your experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share your information with service 
                providers who help us operate our business, and as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4 text-neutral-900">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at privacy@maisonroyal.com
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
