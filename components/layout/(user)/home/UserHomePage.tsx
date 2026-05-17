"use client";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";

type Props = {};

const UserHomePage = (props: Props) => {
  const signOut = useAuthStore((s) => s.signOut);
  const user = useAuthStore((s) => s.user);
  console.log("user: ", user);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.user_metadata.username}</p>
      ) : (
        <p>You are not signed in.</p>
      )}
      Home UserHomePage
      <Button variant="outline" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
};

export default UserHomePage;
