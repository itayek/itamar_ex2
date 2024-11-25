"use client";

import React from "react";
import styles from "@/styles/Design.module.css";

export default function LoginCorrect() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>WhatsApp Memories</h1>
        <h2 className={styles.subtitle}>Relive your memories</h2>
      </div>
    </div>
  );
}
