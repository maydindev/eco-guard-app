"use client";
import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Opsiyonel: Tailwind yardımcı fonksiyonu

// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function AqiTemperatureHumidity() {
  const [selectedRange, setSelectedRange] = useState("1D");

  let statusTag = "Good";

  return (
    <div className="flex border">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="w-[201px] h-[270px] bg-white shadow-md rounded-lg">
        <h2 className="text-[20px] ml-3 mt-3">Temperature</h2>

        <div className="flex items-center justify-evenly /*border border-yellow-600*/">
          {/* Sıcaklık Çubuğu */}
          <div className="w-10 h-48 bg-gray-200 rounded-full relative flex items-end overflow-hidden ml-3 /*border border-green-600*/">
            <div className="bg-blue-400 w-full h-2/4 rounded-full"></div>
          </div>
          {/* Sıcaklık Değeri */}
          <div className="flex flex-col /*border border-purple-600*/ w-[100px] ml-2">
            <div className="/*border border-red-600*/ mt-3">
              <p className="text-3xl font-bold text-blue-500">25°C</p>
              <span
                className={`${
                  statusTag === "Good"
                    ? `border border-[#03AB00] text-[#03AB00]`
                    : statusTag === "Average"
                    ? `border border-[#FFE500] text-[#FFE500]`
                    : statusTag === "Bad"
                    ? `border border-[#FF0000] text-[#FF0000]`
                    : ""
                } px-2 py-1 text-sm rounded-md`}
              >
                {statusTag}
              </span>
            </div>

            {/* Zaman Aralığı Seçimi */}
            <div className="my-4 w-[90px] bg-[#F3F3F7] text-[#000000] p-2 rounded-lg flex flex-col justify-between items-center">
              {["1H", "1D", "1W", "1M"].map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={cn(
                    "w-[80px] h-[20px] text-[10px] rounded-md",
                    selectedRange === range
                      ? "bg-white shadow"
                      : "text-[#606060]"
                  )}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AqiTemperatureHumidity;
