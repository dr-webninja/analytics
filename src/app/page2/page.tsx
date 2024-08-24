"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function Page2() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page 2</h1>

      <Button text="Go Back" onClick={() => router.back()} />
    </div>
  );
}
