import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import { useState } from "react";


// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function WqiPhTds({title,value,statusTag}) {
  const [phLevel, setPhLevel] = useState(7.5);
  const [selectedRange, setSelectedRange] = useState("1D");

  const getStatus = (ph) => {
    if (ph < 6.5)
      return { label: "Acidic", color: "bg-red-500", text: "text-red-500" };
    if (ph > 8.5)
      return {
        label: "Alkaline",
        color: "bg-yellow-500",
        text: "text-yellow-500",
      };
    return { label: "Good", color: "bg-green-500", text: "text-green-500" };
  };

  const status = getStatus(phLevel);

  //w-[908px] h-[166px]
  // w-[908px] h-[166px]
  // mr-5 my-3
  // w-full mx-auto max-w-4xl

  return (
      <div className="bg-white shadow-md rounded-[15px] mb-5 p-4 w-[908px]">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <h2 className="text-lg font-semibold mb-2">{title}</h2>

        {/* İlerleme Çubuğu */}
        <div className="relative w-full h-4 bg-blue-200 rounded-full overflow-hidden mt-3">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
            style={{
              width: `${(phLevel / 14) * 100}%`,
              backgroundColor: "#3b82f6",
            }}
          />
        </div>

        {/* pH Değeri ve Durum */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-3xl font-bold text-blue-500">{phLevel}</span>
          <span className="text-xs font-semibold px-2 py-1 border border-green-500 rounded text-green-500">
            {status.label}
          </span>
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

export default WqiPhTds;
