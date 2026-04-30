export async function POST(request: Request) {
  const body = await request.json();

  console.log("Received data:", body);

  return new Response(
    JSON.stringify({ message: "Signup successful!" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}