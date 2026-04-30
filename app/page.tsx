"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Features from "./components/Features";

export default function Home() {
  const [variant, setVariant] = useState<"A" | "B" | null>(null);
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Startup Founder",
      image: "/sarah.jpg",
      comment:
        "This helped us launch in half the time. Our team now focuses on growth instead of setup problems.",
    },
    {
      name: "Daniel K.",
      role: "Product Manager",
      image: "/daniel.webp",
      comment:
        "Clean workflow, smooth onboarding, and excellent reliability. It made our weekly releases easier.",
    },
    {
      name: "Joy A.",
      role: "Marketing Lead",
      image: "/joy.jpg",
      comment:
        "We improved conversion quickly after switching. The speed and simplicity are exactly what we needed.",
    },
  ];

  useEffect(() => {
    setVariant(Math.random() > 0.5 ? "A" : "B");
  }, []);

  if (!variant) return <p>Loading...</p>;

  return (
  <div style={styles.page}>
    {/* BACKGROUND IMAGE LAYER */}
    <div style={styles.bgImage} />
    <div style={styles.overlay} />

    {/* CONTENT ON TOP */}
    <div style={styles.content}>
      <nav style={styles.navbar}>
        <h2>MyProduct</h2>
      </nav>

      <section style={styles.hero}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Build Faster. Grow Smarter 🚀</h1>

          <p style={styles.subtitle}>
            Launch your product, test ideas, and scale with confidence.
          </p>

          <Link href="/signup" style={styles.button}>
            {variant === "A" ? "Get Started" : "Start Free Trial"}
          </Link>
        </div>
      </section>

      <section style={styles.features}>
        <Features />
      </section>

      <section style={styles.testimonials}>
        <h2 style={styles.testimonialsTitle}>What People Are Saying</h2>
        <p style={styles.testimonialsSubtitle}>
          Real comments from teams using MyProduct every day.
        </p>

        <div style={styles.testimonialsGrid}>
          {testimonials.map((item) => (
            <article key={item.name} style={styles.testimonialCard}>
              <div style={styles.personMedia}>
                <Image
                  src={item.image}
                  alt={`${item.name} photo`}
                  width={116}
                  height={116}
                  style={styles.avatar}
                />
              </div>
              <div style={styles.personContent}>
                <div style={styles.personHeader}>
                  <p style={styles.personName}>{item.name}</p>
                  <p style={styles.personRole}>{item.role}</p>
                </div>
                <p style={styles.comment}>"{item.comment}"</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  </div>
);

  
}

const styles: any = {
  page: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.35)",
    color: "#ffffff",
    background: "rgba(15, 23, 42, 0.2)",
    backdropFilter: "blur(4px)",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 40px",
    flexWrap: "wrap",
    gap: "40px",
  },

  textContainer: {
    maxWidth: "500px",
  },

  title: {
    fontSize: "42px",
    marginBottom: "20px",
    color: "#ffffff",
    textShadow: "0 2px 12px rgba(0, 0, 0, 0.35)",
  },

  subtitle: {
    fontSize: "18px",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "20px",
  },

  button: {
    display: "inline-block",
    backgroundColor: "#f97316",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "6px",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "16px",
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    opacity: 0.9,
    filter: "brightness(1.05) contrast(1.05)",
  },

  glow: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "420px",
  height: "420px",
  background:
    "radial-gradient(circle, rgba(249,115,22,0.25), transparent 70%)",
  borderRadius: "50%",
  filter: "blur(25px)",
  zIndex: -1,
  },

  features: {
    padding: "60px 40px",
    background: "rgba(255, 255, 255, 0.82)",
    backdropFilter: "blur(2px)",
  },

  footer: {
    textAlign: "center",
    padding: "30px",
    borderTop: "1px solid #eee",
    marginTop: "40px",
    color: "#777",
  },

  bgImage: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url('/hero.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -2,
  },

  content: {
    position: "relative",
    zIndex: 1,
    paddingBottom: "80px",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(120deg, rgba(2, 6, 23, 0.62), rgba(15, 23, 42, 0.4), rgba(249, 115, 22, 0.24))",
    zIndex: -1,
  },

  testimonials: {
    padding: "70px 40px 90px",
    background: "rgba(15, 23, 42, 0.22)",
    color: "#ffffff",
  },

  testimonialsTitle: {
    margin: 0,
    fontSize: "34px",
    textAlign: "center",
  },

  testimonialsSubtitle: {
    marginTop: "12px",
    marginBottom: "35px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.85)",
  },

  testimonialsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    maxWidth: "760px",
    margin: "0 auto",
  },

  testimonialCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255, 255, 255, 0.22)",
    borderRadius: 0,
    padding: "10px 0 20px",
  },

  personMedia: {
    flexShrink: 0,
  },

  personContent: {
    flex: 1,
    minWidth: 0,
  },

  personHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
    marginBottom: "10px",
  },

  avatar: {
    borderRadius: "14px",
    objectFit: "cover",
    border: "2px solid rgba(255, 255, 255, 0.28)",
  },

  comment: {
    marginTop: 0,
    marginBottom: 0,
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.96)",
  },

  personName: {
    margin: 0,
    fontWeight: 700,
  },

  personRole: {
    marginTop: "6px",
    marginBottom: 0,
    color: "rgba(255, 255, 255, 0.78)",
    fontSize: "14px",
  },
};