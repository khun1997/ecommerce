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

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
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
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-violet-600/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/5 to-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
              Create Account
            </h1>
            <p className="text-zinc-400 text-lg">
              Join us and start your journey
            </p>
          </div>

          <div className="backdrop-blur-xl bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 shadow-2xl shadow-black/50 space-y-5">
            <div className="space-y-3">
              <input
                className="w-full h-12 px-4 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 focus:outline-none transition-all"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                className="w-full h-12 px-4 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 focus:outline-none transition-all"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="w-full h-12 px-4 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder:text-zinc-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 focus:outline-none transition-all"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={signUp}
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>

            <p className="text-center text-zinc-400 text-sm">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}