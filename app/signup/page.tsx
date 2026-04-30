"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function validatePassword(password: string) {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  }

  async function handleSignup() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password too weak");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { firstName, lastName },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created!");
      router.push("/login");
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>

      <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
      <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />

      <button onClick={handleSignup}>Create Account</button>

      <p>
        Already have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => router.push("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}