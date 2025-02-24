"use client";
import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import { cn } from "@/lib/utils"; // Opsiyonel: Tailwind yardımcı fonksiyonu
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
import { PieChart, Pie, Cell } from "recharts";

// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function AqiVoc({compounds}) {
  //const [selectedRange, setSelectedRange] = useState("1D");

  // className="font-jetbrains_mono"

  const COLORS = ["#2396EF69", "#44ADFF", "#006ACD"];

  /*
  const sampleData = [
    { compound: "Benzene", amount: 50, status: "Bad" },
    { compound: "Toluene", amount: 30, status: "Average" },
    { compound: "Gas 3", amount: 20, status: "Good" },
  ];
  */

  return (
    <div className="flex flex-col justify-center items-center w-[460px] h-[270px] bg-white rounded-[15px] shadow-md font-chivo">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center items-center /*border border-blue-500*/">
        <div className="flex flex-col justify-between items-start /*border border-purple-500*/">
          <div className="flex justify-start items-start ml-4 /*border border-yellow-500*/">
            <span className="text-[20px] mr-2">VOC</span>
            <span className="text-[#626262] text-[15px] mt-1">
              (volatile organic compounds)
            </span>
          </div>

          <div className="flex">
            <div className="flex  /*border border-red-500*/">
              <PieChart width={200} height={200}>
                <Pie
                  data={/*sampleData*/compounds}
                  dataKey="amount"
                  nameKey="compound"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {compounds.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      //cornerRadius={index === 0 ? 10 : 0}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>

            <div className="flex flex-col justify-start ites-center /*border border-green-500*/">
              <table className="w-full border-collapse  text-sm">
                <thead >
                  <tr >
                    <th className="px-1 py-2 text-left"></th>
                    <th className="px-1 py-2 text-left">Compound</th>
                    <th className="px-2 py-2 text-left">Amt</th>
                    <th className="px-1 py-2 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {compounds.map((item, index) => (
                    <tr key={index} className="">
                      <td className="px-1 py-2">
                        <span
                          className="w-2 h-2 rounded-full inline-block"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></span>
                      </td>
                      <td className="px-1 py-2">{item.compound}</td>
                      <td className="px-2 py-2">{item.amount}%</td>
                      <td className="px-6 py-2">
                        <span
                          className={`px-1 py-1 text-xs font-semibold rounded ${
                            item.condition === "Bad"
                              ? "border border-[#FF0000] text-[#FF0000]"
                              : item.condition === "Average"
                              ? "border border-[#FFE500] text-[#FFE500]"
                              : "border border-[#03AB00] text-[#03AB00]"
                          }`}
                        >
                          {item.condition}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AqiVoc;

/*
<ul className="flex flex-col justify-start items-start text-sm ">
                {sampleData.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span
                      className="w-2 h-2 rounded-full inline-block mr-2"
                      style={{
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    ></span>
                    {item.compound} - {item.amount}%
                    <div className="flex justify-start border border-red-500">
                      <span
                        className={`ml-2 px-2 py-1 text-xs font-semibold rounded ${
                          item.status === "Bad"
                            ? "bg-red-200 text-red-700"
                            : item.status === "Average"
                            ? "bg-yellow-200 text-yellow-700"
                            : "bg-green-200 text-green-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              */
