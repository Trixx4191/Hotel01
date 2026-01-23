import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Mail, Lock, User, Phone } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-md mx-auto px-6 py-16">
          <Card className="p-8">
            <h1 className="text-2xl font-light text-center mb-2">Create Account</h1>
            <p className="text-neutral-500 text-center mb-8">
              Join us for exclusive benefits
            </p>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-neutral-600">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-neutral-600">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-neutral-600">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    type="tel"
                    placeholder="Enter your phone"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-neutral-600">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    type="password"
                    placeholder="Create a password"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-neutral-600">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="rounded mt-1" />
                <span className="text-neutral-600">
                  I agree to the{" "}
                  <Link href="/terms" className="text-amber-600 hover:text-amber-700">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-amber-600 hover:text-amber-700">
                    Privacy Policy
                  </Link>
                </span>
              </div>
              
              <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
                Create Account
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-neutral-500">
              Already have an account?{" "}
              <Link href="/login" className="text-amber-600 hover:text-amber-700">
                Sign in
              </Link>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

