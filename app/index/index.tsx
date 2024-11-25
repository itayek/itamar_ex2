"use client";

import React, { useState } from "react";
import Login from "../startpage/page";
import LoginCorrect from "../correctlogin/page";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"login" | "loginCorrect">(
    "login"
  );

  return (
    <>
      {currentScreen === "login" ? (
        <Login onLoginSuccess={() => setCurrentScreen("loginCorrect")} />
      ) : (
        <LoginCorrect />
      )}
    </>
  );
}
