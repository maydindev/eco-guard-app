import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import { useState } from "react";
import WqiTemperature from "../components/wqi-temperature";
import WqiPhTds from "./wqi-ph-tds";
import { useSelector} from "react-redux";

// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function WQI({activeRoomId}) {

   const sensorData = useSelector((state) => state.sensor);
    const activeRoomData = sensorData.find(data => data.id === activeRoomId);
    const {waterTemperature,ph,tds} = activeRoomData
    //console.log(pm25.chart);
  
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

      <WqiTemperature chart={waterTemperature.chart}/>

      <WqiPhTds  title={"PH Level"}
      unitPerValue={ph.unitPerValue} chart={ph.chart}/>

      <WqiPhTds  title={"TDS Level"} unitPerValue={tds.unitPerValue} chart={tds.chart}/>
   
    </div>
  );
}

export default WQI;
