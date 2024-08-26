"use client";

import Button from "@/components/button";
import { sendGTMEvent } from "@/lib/gtm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/page1">Page 1</Link>
          </li>
          <li>
            <Link href="/page2">Page 2</Link>
          </li>
        </ul>
      </nav>

      <Button
        text="Click me!!"
        onClick={() =>
          sendGTMEvent({
            event: "customEvent",
            content_type: "test click me",
          })
        }
      />

      <Button
        text="Allow cookies"
        onClick={() =>
          window.gtag("consent", "update", {
            ad_storage: "granted",
            analytics_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
          })
        }
      />
    </main>
  );
}
