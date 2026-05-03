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
    <div style={styles.page}>
      <div style={styles.bgGlowTop} />
      <div style={styles.bgGlowBottom} />

      <section style={styles.container}>
        <h1 style={styles.title}>Simple, Transparent Pricing</h1>
        <p style={styles.subtitle}>
          Choose the plan that fits your growth stage. Upgrade anytime.
        </p>

        <div style={styles.grid}>
        {plans.map((plan) => (
          <article key={plan.name} style={styles.card}>
            <h2 style={styles.planName}>{plan.name}</h2>
            <p style={styles.price}>${plan.price}</p>
            <p style={styles.desc}>{plan.desc}</p>
            <button style={styles.button}>Choose {plan.name}</button>
          </article>
        ))}
        </div>

        {plans.length === 0 && (
          <p style={styles.loading}>Loading pricing plans...</p>
        )}
      </section>
    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #0b1220, #172554, #ea580c)",
    padding: "70px 20px",
  },

  bgGlowTop: {
    position: "absolute",
    top: "-130px",
    right: "-100px",
    width: "330px",
    height: "330px",
    borderRadius: "50%",
    background: "rgba(251, 146, 60, 0.26)",
    filter: "blur(22px)",
  },

  bgGlowBottom: {
    position: "absolute",
    bottom: "-140px",
    left: "-90px",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background: "rgba(59, 130, 246, 0.22)",
    filter: "blur(24px)",
  },

  container: {
    maxWidth: "1050px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },

  title: {
    margin: 0,
    textAlign: "center",
    fontSize: "42px",
    color: "#ffffff",
    textShadow: "0 2px 12px rgba(0, 0, 0, 0.35)",
  },

  subtitle: {
    marginTop: "12px",
    marginBottom: "34px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.88)",
    fontSize: "17px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "18px",
  },

  card: {
    background: "rgba(255, 255, 255, 0.95)",
    border: "1px solid rgba(255,255,255,0.65)",
    borderRadius: "14px",
    padding: "24px",
    boxShadow: "0 18px 40px rgba(2, 6, 23, 0.28)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  planName: {
    margin: 0,
    color: "#0f172a",
    fontSize: "22px",
  },

  price: {
    margin: 0,
    fontSize: "34px",
    fontWeight: 700,
    color: "#ea580c",
  },

  desc: {
    margin: 0,
    color: "#334155",
    lineHeight: 1.5,
  },

  button: {
    marginTop: "8px",
    padding: "11px 14px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #f97316, #ea580c)",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: 700,
  },

  loading: {
    marginTop: "20px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.9)",
  },
};