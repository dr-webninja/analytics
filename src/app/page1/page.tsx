import Client from "@/components/client";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Page1() {
  const xpto = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );

  console.log("PAGE 1");

  return (
    <div className="flex min-h-screen flex-col  p-24">
      <h1>Page 1</h1>

      <Link href="/page2">Go to Page 2</Link>

      <Client />
      {JSON.stringify(xpto, null, 2)}
    </div>
  );
}
