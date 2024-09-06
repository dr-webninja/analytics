import Client from "@/components/client";

export default async function Page2() {
  const xpto = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );

  console.log("PAGE 2");

  return (
    <div className="flex min-h-screen flex-col  p-24">
      <h1>Page 2</h1>

      <Client />
      {JSON.stringify(xpto, null, 2)}
    </div>
  );
}
