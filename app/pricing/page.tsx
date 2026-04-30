"use client";

import { useEffect, useState } from "react";

type Plan = {
  name: string;
  price: number;
  desc: string;
};

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    async function fetchPlans() {
      const res = await fetch("/api/graphql", {
        method: "POST",
        body: JSON.stringify({
          query: `
            {
              pricingPlans {
                name
                price
                desc
              }
            }
          `,
        }),
      });

      const data = await res.json();
      setPlans(data.data.pricingPlans);
    }

    fetchPlans();
  }, []);

  return (
    <div>
      <h1>Pricing Page</h1>

      <div>
        {plans.map((plan) => (
          <div key={plan.name}>
            <h2>
              {plan.name} - ${plan.price}
            </h2>
            <p>{plan.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}