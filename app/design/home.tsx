"use client";

import React from "react";
import styles from "@/styles/Design.module.css";

export default function Home({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>WhatsApp Memories</h1>
        <h2 className={styles.subtitle}>Relive your memories</h2>
        <p className={styles.description}>
          Organize, share, and relive your most beautiful memories. A personal
          catalog for each user and a dedicated chat for nostalgic
          conversation.
        </p>
        <button className={styles.button} onClick={onLoginClick}>
          Login
        </button>
        <button className={styles.button}>Sign Up</button>
      </div>
    </div>
  );
}
