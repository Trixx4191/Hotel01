"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar, Users, Bed } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function BookingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4 text-neutral-900 font-light text-center">
              Complete Your Reservation
            </h1>
            <p className="text-lg text-neutral-600 text-center mb-12">
              You're just a few steps away from an unforgettable stay
            </p>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Check-In Date</Label>
                    <Input type="date" className="mt-2" />
                  </div>
                  <div>
                    <Label>Check-Out Date</Label>
                    <Input type="date" className="mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Room Type</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="deluxe">Deluxe King Suite</SelectItem>
                        <SelectItem value="executive">Executive Ocean View</SelectItem>
                        <SelectItem value="presidential">Presidential Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Number of Guests</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Full Name</Label>
                  <Input placeholder="John Doe" className="mt-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="john@example.com" className="mt-2" />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input type="tel" placeholder="+1 (234) 567-8900" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label>Special Requests (Optional)</Label>
                  <textarea
                    className="w-full mt-2 px-3 py-2 border border-neutral-300 rounded-md"
                    rows={4}
                    placeholder="Any special requests or requirements..."
                  />
                </div>

                <div className="bg-neutral-100 p-6 rounded-lg">
                  <h3 className="text-lg mb-4">Booking Summary</h3>
                  <div className="space-y-2 text-neutral-600">
                    <div className="flex justify-between">
                      <span>Room Rate (per night)</span>
                      <span>$425</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Number of nights</span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Fees</span>
                      <span>$127</span>
                    </div>
                    <div className="border-t border-neutral-300 pt-2 mt-2 flex justify-between">
                      <span className="font-medium text-neutral-900">Total</span>
                      <span className="font-medium text-neutral-900">$1,402</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3">
                  Confirm Reservation
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
