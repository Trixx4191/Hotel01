import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FeaturedRooms } from "../components/FeaturedRooms";
import { ExperiencesSection } from "../components/ExperiencesSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedRooms />
        <ExperiencesSection />
      </main>
      <Footer />
    </div>
  );
}