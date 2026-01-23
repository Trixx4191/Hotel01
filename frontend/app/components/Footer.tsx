"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Award,
  Shield,
  Clock
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl mb-4 font-light">
              Stay Connected
            </h3>
            <p className="text-neutral-300 mb-8">
              Be the first to know about exclusive offers, new experiences, and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-400 focus:ring-amber-500 focus:border-amber-500"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-light tracking-wide mb-6">
              <span className="font-normal">MAISON</span>
              <span className="text-amber-600 ml-1">ROYAL</span>
            </h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              A sanctuary of luxury and sophistication, where every detail is crafted 
              to create unforgettable experiences for our distinguished guests.
            </p>
            
            {/* Awards */}
            <div className="flex items-center gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>5-Star Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/rooms" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Rooms & Suites
              </Link>
              <Link href="/dining" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Dining
              </Link>
              <Link href="/spa" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Spa & Wellness
              </Link>
              <Link href="/meetings" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Meetings & Events
              </Link>
              <Link href="/gallery" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Gallery
              </Link>
              <Link href="/offers" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Special Offers
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6">Services</h4>
            <nav className="space-y-3">
              <Link href="/concierge" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Concierge
              </Link>
              <Link href="/room-service" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Room Service
              </Link>
              <Link href="/valet" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Valet Parking
              </Link>
              <Link href="/airport-transfer" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Airport Transfer
              </Link>
              <Link href="/business-center" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Business Center
              </Link>
              <Link href="/pet-services" className="block text-neutral-300 hover:text-white transition-colors duration-200 text-left">
                Pet Services
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-neutral-300">
                    123 Luxury Avenue<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <a href="tel:+1234567890" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <a href="mailto:reservations@maisonroyal.com" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  reservations@maisonroyal.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <span className="text-neutral-300">24/7 Concierge</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm text-neutral-400 mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-neutral-800 hover:bg-amber-600 rounded-lg transition-colors duration-200">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-neutral-800 hover:bg-amber-600 rounded-lg transition-colors duration-200">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-neutral-800 hover:bg-amber-600 rounded-lg transition-colors duration-200">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-neutral-800 hover:bg-amber-600 rounded-lg transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © 2024 Maison Royal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}