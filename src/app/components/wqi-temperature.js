import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import { useState } from "react";


// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function WqiTemperature() {
  const [temperature, setTemperature] = useState(43);
  const [selectedRange, setSelectedRange] = useState("1D");

  const getStatus = (temp) => {
    if (temp < 20)
      return { label: "Cold", color: "bg-blue-500", text: "text-blue-500" };
    if (temp < 35)
      return { label: "Good", color: "bg-green-500", text: "text-green-500" };
    return {
      label: "Average",
      color: "bg-yellow-400",
      text: "text-yellow-500",
    };
  };

  const status = getStatus(temperature);

  // w-[908px] h-[166px]
  // mr-5 my-3
  // w-full max-w-4xl mx-auto

  return (
    <div className="bg-white shadow-md rounded-[15px] mb-5 p-4 w-[908px] ">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h2 className="text-lg font-semibold mb-2">Temperature</h2>

      {/* Sıcaklık ve Durum */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-blue-500">
          {temperature}°C
        </span>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded bg-yellow-100 text-yellow-700`}
        >
          {status.label}
        </span>
      </div>

      {/* İlerleme Çubuğu */}
      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-3">
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
          style={{
            width: `${temperature}%`,
            background: "linear-gradient(to right, #3b82f6, #ef4444)",
          }}
        />
      </div>

      {/* Zaman Filtreleri */}
      <div className="flex justify-end mt-3 space-x-2">
        {["1H", "1D", "1W", "1M"].map((range) => (
          <button
            key={range}
            className={`px-3 py-1 text-xs font-medium rounded ${
              selectedRange === range
                ? "bg-gray-200 text-black"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedRange(range)}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WqiTemperature;
