"use client";
import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import { cn } from "@/lib/utils"; // Opsiyonel: Tailwind yardımcı fonksiyonu
import AqiTemperatureHumidity from "../components/aqi-temperature-humidity";
import AqiPm25Co2 from "../components/aqi-pm25-co2";
import AqiVoc from "../components/aqi-voc";

// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function AQI() {

  return (
    <div className="flex flex-col justify-center items-between ">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex my-3">
        <AqiPm25Co2 />

        <AqiTemperatureHumidity />

        <AqiTemperatureHumidity />
      </div>

      <div className="flex my-3">
        <AqiPm25Co2 />

        <AqiVoc />
      </div>
    </div>
  );
}

export default AQI;
