import { users } from "@/app/lib/users";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return new Response(
      JSON.stringify({ message: "User already exists" }),
      { status: 400 }
    );
  }

  users.push({ email, password });

  return new Response(
    JSON.stringify({ message: "User created successfully" })
  );
}