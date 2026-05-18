"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AuthFormProps = {
  title: string;
  onSubmit: (data: { email: string; password: string }) => void;
  loading?: boolean;
  btnText: string;
};

export function AuthForm({ title, onSubmit, loading, btnText }: AuthFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>}

      <div className="space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          className="h-12 border-hairline bg-surface-card text-white placeholder:text-muted focus:border-white focus:outline-none rounded-none"
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          className="h-12 border-hairline bg-surface-card text-white placeholder:text-muted focus:border-white focus:outline-none rounded-none"
        />
      </div>

      <Button
        className="h-12 w-full bg-canvas border border-white text-sm font-bold text-white uppercase tracking-[1.5px] hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
        disabled={loading}
      >
        {loading ? "Please wait..." : btnText}
      </Button>
    </form>
  );
}