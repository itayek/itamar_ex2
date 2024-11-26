"use client";

import React from "react";
import styles from "@/styles/Design.module.css";

export default function LoginCorrect() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/logo.svg" alt="Logo" className={styles.logoAnim} />
        <h1 className={styles.midtitle}>WhatsApp Memories</h1>
        <h2 className={styles.midsubtitle}>Relive your memories</h2>
      </div>
    </div>
  );
}
