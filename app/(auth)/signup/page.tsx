"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpSection() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signUp = async () => {
    try {
      setLoading(true);

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username },
        },
      });

      if (!error) {
        router.replace("/app");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-canvas">
      <nav className="border-b border-hairline bg-canvas">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/app" className="text-xl font-bold tracking-tight text-white">
              BMW M
            </Link>
          </div>
        </div>
      </nav>

      <div className="absolute right-0 top-0 h-3 w-3 bg-m-blue-light" />

      <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-4xl font-bold text-white uppercase tracking-wide">Create Account</h1>
            <p className="text-lg text-body">
              Join us and start your journey
            </p>
          </div>

          <div className="border border-hairline bg-surface-card p-8 rounded-none">
            <div className="space-y-4">
              <input
                className="h-12 w-full border border-hairline bg-surface-card px-4 text-white placeholder:text-muted focus:border-white focus:outline-none rounded-none"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                className="h-12 w-full border border-hairline bg-surface-card px-4 text-white placeholder:text-muted focus:border-white focus:outline-none rounded-none"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="h-12 w-full border border-hairline bg-surface-card px-4 text-white placeholder:text-muted focus:border-white focus:outline-none rounded-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={signUp}
              disabled={loading}
              className="mt-6 flex h-12 w-full items-center justify-center bg-canvas border border-white text-sm font-bold text-white uppercase tracking-[1.5px] hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>

            <p className="mt-6 text-center text-sm font-medium text-muted">
              Already have an account?{" "}
              <Link href="/signin" className="text-m-blue-light hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}