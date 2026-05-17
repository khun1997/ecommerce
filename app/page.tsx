"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

export default function HomePage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const loading = useAuthStore((s) => s.loading);
  const init = useAuthStore((s) => s.init);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (loading) return;

    if (user) {
      router.push("/app");
    } else {
      router.push("/signin");
    }
  }, [user, loading]);

  return <div>Loading...</div>;
}
