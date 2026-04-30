import { users } from "@/app/lib/users";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const user = users.find((u) => u.email === email);

  if (!user || user.password !== password) {
    return new Response(
      JSON.stringify({ message: "Invalid credentials" }),
      { status: 401 }
    );
  }

  return new Response(
    JSON.stringify({ message: "Login successful" })
  );
}