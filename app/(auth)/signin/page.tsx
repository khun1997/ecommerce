"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/auth/AuthForm";
import { useAuthStore } from "@/store/auth-store";
import Link from "next/link";

export default function SignInPage() {
  const user = useAuthStore((s) => s.user);
  const signIn = useAuthStore((s) => s.signIn);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/app");
    }
  }, [user, router]);

  const handleSubmit = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);
      await signIn(data.email, data.password);
      router.replace("/app");
    } catch (err) {
      console.log("Sign in error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-violet-600/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/5 to-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-zinc-400 text-lg">
              Sign in to continue your journey
            </p>
          </div>

          <div className="backdrop-blur-xl bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 shadow-2xl shadow-black/50">
            <AuthForm
              title=""
              btnText="Sign In"
              onSubmit={handleSubmit}
              loading={loading}
            />

            <p className="text-center text-zinc-400 mt-6 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}