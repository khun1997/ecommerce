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
    <form onSubmit={handleSubmit} className="space-y-5">
      {title && (
        <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      )}

      <div className="space-y-3">
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          className="h-12 bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-lg transition-all"
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          className="h-12 bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-lg transition-all"
        />
      </div>

      <Button
        className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center gap-2">
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
            Please wait...
          </span>
        ) : (
          btnText
        )}
      </Button>
    </form>
  );
}