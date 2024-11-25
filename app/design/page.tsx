"use client";

import React, { useState } from "react";
import styles from "@/styles/Design.module.css";
import Image from "next/image";


export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"home" | "login">("home");

  const handleLoginClick = () => {
    setCurrentScreen("login");
  };

  const handleGoBack = () => {
    setCurrentScreen("home");
  };

  return (
    <div className={styles.container}>
      {currentScreen === "home" ? (
        <div className={styles.card}>
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>WhatsApp Memories</h1>
          <h2 className={styles.subtitle}>Relive your memories</h2>
          <p className={styles.description}>
            Organize, share and relive your most beautiful memories. A personal
            catalog for each user and a dedicated chat for nostalgic
            conversation.
          </p>
          <button className={styles.button} onClick={handleLoginClick}>
            Login
          </button>
          <button className={styles.button}>Sign Up</button>
        </div>
      ) : (
        <div className={styles.card}>
          <h1 className={styles.title}>Login</h1>
          <p className={styles.description}>
            Please enter your email and password to continue.
          </p>
          <form>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
            />
            <button className={styles.button} type="submit">
              Submit
            </button>
          </form>
          <button className={styles.button} onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}
