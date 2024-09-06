"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function Client() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1>Client component</h1>

      <Button text="Go Back" onClick={() => router.back()} />
      <Button text="Go to Page 1" onClick={() => router.push("/page1")} />
    </div>
  );
}
