export async function POST(request: Request) {
  const body = await request.json();
  const query = body.query;

  // 🧠 Fake database
  const pricingPlans = [
    { name: "Free", price: 0, desc: "Basic features" },
    { name: "Pro", price: 10, desc: "Everything in Free + more" },
    { name: "Enterprise", price: 50, desc: "Full access + support" },
  ];

  // 🧠 Fake resolver logic
  if (query.includes("pricingPlans")) {
    return new Response(
      JSON.stringify({
        data: {
          pricingPlans,
        },
      })
    );
  }

  return new Response(
    JSON.stringify({ error: "Invalid query" }),
    { status: 400 }
  );
}