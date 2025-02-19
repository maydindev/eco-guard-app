import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import { useState } from "react";
import WqiTemperature from "../components/wqi-temperature";
import WqiPhTds from "./wqi-ph-tds";

// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function WQI() {
  
  //w-[908px] h-[166px]
  // w-[908px] h-[166px]
  // mr-5 my-3

  return (
    <div className="flex flex-col justify-start items-between w-[908px] my-3">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <WqiTemperature />

      <WqiPhTds  title={"PH Level"} value={""} statusTag={""}/>

      <WqiPhTds  title={"TDS Level"} value={""} statusTag={""}/>
   
    </div>
  );
}

export default WQI;
