"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 space-y-4">
        <input
          className="w-full border p-2"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full border p-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signUp}
          disabled={loading}
          className="w-full bg-black p-2 text-white disabled:opacity-50"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
