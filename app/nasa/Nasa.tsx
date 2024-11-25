"use client";

import React, { useEffect, useState } from "react";
import { getData } from "./api";
import styles from "@/styles/Nasa.module.css";

// Define the APOD item type here if not using a separate file
type ApodItem = {
  title: string;
  date: string;
  url: string;
  media_type: string;
  explanation: string;
};

export default function Nasa() {
  const [apodData, setApodData] = useState<ApodItem[]>([]); // Use the ApodItem[] type

  useEffect(() => {
    // Fetch 3 APOD items on page load
    getData(3).then((data) => setApodData(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NASA's Astronomy Picture of the Day</h1>
      <div className={styles.cards}>
        {apodData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.date}>{item.date}</p>
            {item.media_type === "image" ? (
              <img src={item.url} alt={item.title} className={styles.image} />
            ) : (
              <p className={styles.error}>Video content cannot be displayed</p>
            )}
            <p className={styles.explanation}>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
