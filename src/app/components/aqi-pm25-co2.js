"use client";
import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import { cn } from "@/lib/utils"; // Opsiyonel: Tailwind yardımcı fonksiyonu
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
function AqiPm25Co2() {
  //const [selectedRange, setSelectedRange] = useState("1D");

  const sampleData = [
    { name: "10", value: 10 },
    { name: "20", value: 30 },
    { name: "30", value: 25 },
    { name: "40", value: 35 },
    { name: "50", value: 50 },
  ];

  return (
    <div className="w-[378px] h-[270px] bg-white rounded-[15px] p-5 mr-5">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h2 className="text-lg font-semibold">PM2.5</h2>
      <div className="flex justify-end space-x-2 text-sm text-gray-500">
        <button className="px-2 py-1 bg-gray-200 rounded">1H</button>
        <button className="px-2 py-1 bg-gray-300 rounded font-bold">1D</button>
        <button className="px-2 py-1 bg-gray-200 rounded">1W</button>
        <button className="px-2 py-1 bg-gray-200 rounded">1M</button>
      </div>
      <ResponsiveContainer width="100%" height={120}>
        <AreaChart
          data={sampleData}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorPm25" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "gray", fontSize: 12 }}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip />
          <Area
            type="linear"
            dataKey="value"
            stroke="#3b82f6"
            fill="url(#colorPm25)"
            strokeWidth={2}
            /*dot={{ r: 5, fill: "#3b82f6", strokeWidth: 1 }}*/
            /*activeDot={{
              r: 8,
              fill: "#3b82f6",
              stroke: "white",
              strokeWidth: 1,
            }}*/
            dot={(props) => {
              const { cx, cy, index, data } = props;
              console.log(props.data);
              // Sadece ilk ve son noktayı göster
              if (index === 0 || index === /*data.length - 1*/ 4) {
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={5}
                    fill="#3b82f6"
                    stroke="white"
                    strokeWidth={1}
                  />
                );
              }
              return null; // Diğer noktaları gizle
            }}
            activeDot={{
              r: 8,
              fill: "#3b82f6",
              stroke: "white",
              strokeWidth: 1,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>Current:</span>
        <span>Condition:</span>
      </div>
    </div>
  );
}

export default AqiPm25Co2;
