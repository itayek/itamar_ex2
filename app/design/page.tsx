"use client";

import React, { useState } from "react";
import Home from "./home";
import Login from "./login";
import LoginCorrect from "./login-correct";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"home" | "login" | "login-correct">("home");

  const handleLoginSuccess = () => setCurrentScreen("login-correct");
  const handleLoginClick = () => setCurrentScreen("login");
  const handleGoBack = () => setCurrentScreen("home");

  return (
    <>
      {currentScreen === "home" && <Home onLoginClick={handleLoginClick} />}
      {currentScreen === "login" && <Login onLoginSuccess={handleLoginSuccess} />}
      {currentScreen === "login-correct" && <LoginCorrect />}
    </>
  );
}
