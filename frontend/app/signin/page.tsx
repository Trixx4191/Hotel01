import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function SignInPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-md mx-auto px-6">
          <h1 className="text-4xl mb-8 text-neutral-900 font-light text-center">
            Welcome Back
          </h1>
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="your@email.com" className="mt-2" />
              </div>
              <div>
                <Label>Password</Label>
                <Input type="password" placeholder="••••••••" className="mt-2" />
              </div>
              <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
                Sign In
              </Button>
              <p className="text-center text-neutral-600 text-sm">
                Don't have an account? <a href="#" className="text-amber-600 hover:underline">Create one</a>
              </p>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
