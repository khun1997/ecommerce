"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);
  const router = useRouter();
  const signOut = useAuthStore((s) => s.signOut);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.email}</p>
      <Button
        onClick={() => {
          signOut();
          router.push("/signin");
        }}
      >
        Sign Out
      </Button>

      <Button onClick={() => router.push("/signin")}>Sign In</Button>
      <Button
        onClick={() => {
          router.push("/signin");
        }}
      >
        Change Account
      </Button>
    </div>
  );
}
