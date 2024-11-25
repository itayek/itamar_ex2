"use client";

import React, { useState } from "react";
import styles from "@/styles/Design.module.css";

export default function Login({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    // Simulated login validation (replace with actual Supabase Auth logic if needed)
    if (email === "test@example.com" && password === "password") {
      setError(false);
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>WhatsApp Memories</h1>
        <h2 className={styles.subtitle}>Relive your memories</h2>
        <input
          type="email"
          placeholder="Mail Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${styles.inputField} ${error ? styles.inputError : ""}`}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`${styles.inputField} ${error ? styles.inputError : ""}`}
        />
        {error && (
          <p className={styles.errorMessage}>
            One of the data you entered is incorrect. Please try again.
          </p>
        )}
        <p className={styles.forgotPassword}>I forgot my password</p>
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
