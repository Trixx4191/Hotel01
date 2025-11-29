import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";

export function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16 min-h-[60vh] flex items-center">
        <div className="max-w-3xl mx-auto px-6 w-full">
          <h1 className="text-4xl md:text-5xl mb-8 text-neutral-900 font-light text-center">
            What are you looking for?
          </h1>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Search rooms, dining, experiences..."
              className="h-14 text-lg"
            />
            <Button className="h-14 px-8 bg-neutral-900 hover:bg-neutral-800">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
