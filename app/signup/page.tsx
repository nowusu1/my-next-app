"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email to confirm signup");
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.bgGlowTop} />
      <div style={styles.bgGlowBottom} />
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account 🚀</h1>
        <p style={styles.subtitle}>Start building with us today</p>

        <div style={styles.field}>
          <label style={styles.label}>First Name</label>
          <input
            style={styles.input}
            placeholder="Enter first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Last Name</label>
          <input
            style={styles.input}
            placeholder="Enter last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p style={styles.hint}>
          Password should be 8+ chars with numbers & symbols
        </p>

        <button style={styles.button} onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0b1220, #172554, #ea580c)",
    fontFamily: "Arial",
    position: "relative",
    overflow: "hidden",
    padding: "30px 16px",
  },

  bgGlowTop: {
    position: "absolute",
    top: "-120px",
    right: "-90px",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background: "rgba(251, 146, 60, 0.25)",
    filter: "blur(18px)",
  },

  bgGlowBottom: {
    position: "absolute",
    bottom: "-130px",
    left: "-70px",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background: "rgba(59, 130, 246, 0.2)",
    filter: "blur(20px)",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.96)",
    border: "1px solid rgba(255,255,255,0.65)",
    padding: "34px 28px",
    borderRadius: "16px",
    boxShadow: "0 24px 55px rgba(2, 6, 23, 0.34)",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    position: "relative",
    zIndex: 1,
  },

  title: {
    margin: 0,
    fontSize: "30px",
    color: "#0f172a",
  },

  subtitle: {
    margin: 0,
    fontSize: "14px",
    color: "#475569",
    marginBottom: "6px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  label: {
    fontSize: "13px",
    fontWeight: 700,
    color: "#1e293b",
  },

  input: {
    padding: "12px 13px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    outline: "none",
    background: "rgba(248, 250, 252, 0.95)",
    fontSize: "14px",
  },

  button: {
    marginTop: "8px",
    padding: "13px",
    background: "linear-gradient(90deg, #f97316, #ea580c)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 700,
  },

  hint: {
    fontSize: "12px",
    color: "#64748b",
    marginTop: "-3px",
  },
};