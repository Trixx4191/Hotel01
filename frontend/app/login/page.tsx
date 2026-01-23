import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Mail, Lock, User } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-md mx-auto px-6 py-16">
          <Card className="p-8">
            <h1 className="text-2xl font-light text-center mb-2">Welcome Back</h1>
            <p className="text-neutral-500 text-center mb-8">
              Sign in to access your account
            </p>
            
            <form className="space-y-4">
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
                <label className="text-sm text-neutral-600">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-neutral-600">Remember me</span>
                </label>
                <a href="#" className="text-amber-600 hover:text-amber-700">
                  Forgot password?
                </a>
              </div>
              
              <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
                Sign In
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-neutral-500">
              Don't have an account?{" "}
              <Link href="/register" className="text-amber-600 hover:text-amber-700">
                Create account
              </Link>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

