"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/auth/AuthForm";
import { useAuthStore } from "@/store/auth-store";

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
    <div className="flex min-h-screen items-center justify-center">
      <AuthForm
        title="Sign In"
        btnText={"LogIn"}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
}
