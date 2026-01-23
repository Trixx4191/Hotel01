"use client"; 
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Calendar, Users, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const router = useRouter();

  return (
    <Card className="bg-white/95 backdrop-blur-md shadow-2xl border-0 p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
        {/* Check-in */}
        <div className="space-y-2">
          <label className="text-sm text-neutral-600 uppercase tracking-wide">
            Check-in
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <label className="text-sm text-neutral-600 uppercase tracking-wide">
            Check-out
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="text-sm text-neutral-600 uppercase tracking-wide">
            Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
          </div>
        </div>

        {/* Search Button */}
        <div className="space-y-2">
          <label className="text-sm text-neutral-600 uppercase tracking-wide opacity-0">
            Search
          </label>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => router.push("/booking")}
              className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Check Availability
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Special Offers Link */}
      <div className="mt-6 pt-6 border-t border-neutral-200/50 text-center">
        <Link href="/offers" className="text-amber-600 hover:text-amber-700 text-sm transition-colors duration-200">
          View Special Offers & Packages
        </Link>
      </div>
    </Card>
  );
}