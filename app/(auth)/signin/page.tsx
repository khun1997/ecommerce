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
            <h1 className="mb-2 text-4xl font-bold text-white">WELCOME BACK</h1>
            <p className="text-lg text-body">
              Sign in to continue your journey
            </p>
          </div>

          <div className="border border-hairline bg-surface-card p-8">
            <AuthForm
              title=""
              btnText="Sign In"
              onSubmit={handleSubmit}
              loading={loading}
            />

            <p className="mt-6 text-center text-sm font-medium text-muted">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-m-blue-light hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}