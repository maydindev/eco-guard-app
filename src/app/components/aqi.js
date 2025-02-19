"use client";
import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import { cn } from "@/lib/utils"; // Opsiyonel: Tailwind yardımcı fonksiyonu
import AqiTemperatureHumidity from "../components/aqi-temperature-humidity";
import AqiPm25Co2 from "../components/aqi-pm25-co2";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function AQI() {
  //const [selectedRange, setSelectedRange] = useState("1D");

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

        <div className="w-[450px] h-[270px] bg-white rounded-lg mr-5">
          <span>VOC GRAFİK</span>
        </div>
      </div>
    </div>
  );
}

export default AQI;
