import React from "react";
import "/src/app/globals.css";

function Notification({notification}) {
  return (
    <div className="flex justify-between items-center border bg-white w-[1100px] h-[100px] px-5 mt-5 rounded-2xl">
      <div className="flex flex-col">
        <div className="flex justify-start items-center">
          <span className="flex text-white text-[8px] bg-[#FF0E0E] rounded-[3px] w-[37px] h-[13px] justify-start items-center pl-1">
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
