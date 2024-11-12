"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminAccess = () => {
    setIsLoading(true);
    router.push("/studio");
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between'>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className='font-bold'>
          Society of Industrial Engineering Students - SOIES Nepal{" "}
        </h1>
        <p>
          This is a website for the Society of Industrial Engineering Students -
          SOIES Nepal for Content Management.
        </p>
        <Button
          onClick={handleAdminAccess}
          variant={"secondary"}
          disabled={isLoading}
        >
          {isLoading ? "Redirecting..." : "Login for Admin Access"}
        </Button>
      </main>
    </div>
  );
}
