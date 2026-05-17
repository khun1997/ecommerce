import { Button } from "@/components/ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-black">
      <Button variant="outline">Hello World</Button>

      <Button className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
        Hover Me
      </Button>

      <Card className="w-80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>

          <CardDescription>This is a description of the card.</CardDescription>
        </CardHeader>

        <CardContent>
          <p>This is the content of the card.</p>
        </CardContent>

        <CardFooter>
          <Button variant="secondary">Action</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
