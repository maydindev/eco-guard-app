import React from "react";
import "/src/app/globals.css";
import Head from "next/head";

function Headbar({title, handleClickNotifications}) {
  return (

    <div className="flex justify-around items-center w-[1200px] h-[80px] mt-5 /*border border-red-500*/">

      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex p-6 mr-10">
        <h2 className="flex text-[20px] font-bold text-gray-800 mt-4">{title}</h2>
      </div>


      <div className="w-[438px] h-[52px] flex justify-start items-center  bg-white shadow-lg rounded-[10px] mr-20">
        <img src="/icondashboardfind.png" alt="" className="flex justify-start ml-5" />
        <span className="text-[#1A1A1A] ml-5">Search Anything Here...</span>
      </div>

      <div className="flex justify-center items-center gap-6 mt-4 border">
        <img src="/icondashboardtogglesmall.png" alt="" />
        <button onClick={handleClickNotifications}><img src="/icondashboardnotification.png" alt="" /></button>
        <img src="/icondashboardsupport.png" alt="" />
      </div>

    </div>


  );
}

export default Headbar;
