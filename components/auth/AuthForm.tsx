"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AuthFormProps = {
  title: string;
  onSubmit: (data: { email: string; password: string }) => void;
  loading?: boolean;
};

export function AuthForm({ title, onSubmit, loading }: AuthFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    onSubmit({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="email" type="email" placeholder="Email" />

          <Input name="password" type="password" placeholder="Password" />

          <Button className="w-full" disabled={loading}>
            {loading ? "Loading..." : "Continue"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
