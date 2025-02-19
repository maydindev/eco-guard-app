import React from "react";
import "/src/app/globals.css";
import Head from "next/head";

// w-[1200px]
// style={{ fontFamily: "'Chivo', sans-serif" }}    font-chivo
function Notification({notification}) {
  return (
    <div className="flex justify-between items-center border bg-white w-[1100px] h-[100px] px-5 mt-5 rounded-2xl">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col">
        <div className="flex justify-start items-center">
          <span className="flex text-white text-[8px] bg-[#FF0E0E] rounded-[3px] w-[37px] h-[13px] justify-start items-center pl-2">
            {notification.type}
          </span>
          <span className="text-[#606060] text-[9px] pl-3">{notification.durationText}</span>
        </div>
        <span className="text-[#606060] text-[18px] mr-10">
        {notification.content}
        </span>
      </div>
      <span className="text-[#3C80F7] text-[20px] font-light">View all</span>
    </div>
  );
}

export default Notification;
