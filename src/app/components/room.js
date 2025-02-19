import React from "react";
import "/src/app/globals.css";
import Head from "next/head";

// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function Room({room}) {
  return (
    <div className="flex justify-center items-center bg-white h-[57px] mr-10 rounded-[15px] /*border border-red-800*/">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <img src="/icondashboardbed.png" alt="" className="m-1"/>
      <div className="flex flex-col justify-center items-start">
        <span className="mx-3">{room.name}</span>
        <span className={`flex bg-white text-[8px] ${room.status === "Good" ? "border border-[#03AB00] text-[#03AB00]" : room.status === "Average" ? "border border-[#FFE500] text-[#FFE500]" : "border border-[#FF0E0E] text-[#FF0E0E]"}  rounded-[3px]  h-[13px] justify-center items-start ml-3 px-2 `}>
          {room.status}
        </span>
      </div>
      
    </div>
  );
}

export default Room;

