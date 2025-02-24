"use client";
import React from "react";
import "/src/app/globals.css";
import Head from "next/head";

// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function Room({ room, activeRoomId, setActiveRoomId }) {
  const handleClick = () => {
    setActiveRoomId(room.id);
  };
  //icondashboardlivingroom
  return (
    <button
      className={`flex justify-between items-center ${
        activeRoomId === room.id ? "bg-[#3F7DF8]" : "bg-white"
      } w-[177px] h-[57px] mr-10 rounded-[15px] /*border border-red-800*/`}
      onClick={handleClick}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex justify-start">
        <img src={room.image} alt="" className="m-1 w-[48px] h-[48px] rounded-[15px]" />

        <div className="flex flex-col justify-center items-start">
          <span
            className={`mx-3 ${
              activeRoomId === room.id ? "text-[#FFFFFF]" : "text-[#1D1D1D]"
            }`}
          >
            {room.name}
          </span>
          <span
            className={`flex ${
              activeRoomId === room.id ? "bg-transparent" : "bg-white"
            } text-[8px] ${
              room.status === "Good"
                ? "border border-[#03AB00] text-[#03AB00]"
                : room.status === "Average"
                ? "border border-[#FFE500] text-[#FFE500]"
                : "border border-[#FF0E0E] text-[#FF0E0E]"
            }  rounded-[3px]  h-[13px] justify-center items-start ml-3 px-2 `}
          >
            {room.status}
          </span>
        </div>
      </div>
    </button>
  );
}

export default Room;
