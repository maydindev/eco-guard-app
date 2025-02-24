"use client";
import React from "react";
import "/src/app/globals.css";
import Head from "next/head";
import Sidebar from "../components/sidebar";
import Headbar from "../components/headbar";
import Notification from "../components/notification";
import Room from "../components/room";
import AQI from "../components/aqi";
import WQI from "../components/wqi";
import CategoryTitle from "../components/categorytitle";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSensorData } from "../slices/sensorSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [notifications, setNotifications] = useState(false);
  const [activeRoomId, setActiveRoomId] = useState(1);

  const dispatch = useDispatch();
  const router = useRouter();

  const sensorData = useSelector((state) => state.sensor);
  //const { rooms, status, error } = sensorData;

  const userData = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchSensorData());
  }, [dispatch]);

  const handleClickNotifications = () => setNotifications(true);
  const handleClickDashboard = () => setNotifications(false);
  const handleClickLogout = () => router.push("/login");

  return (
    <div>
      <div className="flex justify-center items-start  bg-[#E8F3FC]">
        <div>
          <Sidebar
            onClickDashboard={handleClickDashboard}
            onClickLogout={handleClickLogout}
          />
        </div>

        <div className="flex flex-col justify-center items-start text-black /*border border-green-500*/">
          <Headbar
            title={notifications ? "Notifications" : "Dashboard"}
            handleClickNotifications={handleClickNotifications}
          />

          <div className="flex flex-col /*border border-purple-500*/ my-10 mx-20">
            {!notifications && <CategoryTitle key={0} title={"Rooms"} />}
            <div className="flex  justify-center items-center">
              {!notifications &&
                sensorData.map((room) => <Room key={room.id} room={room} activeRoomId={activeRoomId} setActiveRoomId={setActiveRoomId}/>)}
            </div>
          </div>

          <div className="ml-12">
            <div>
              {notifications &&
                userData.map((notification) => (
                  <div className="flex flex-col justify-center items-center">
                    <Notification
                      key={notification.id}
                      notification={notification}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col justify-start items-start /*border border-green-500*/ mt-4 mx-20">
            <div>
              {!notifications && <CategoryTitle key={1} title={"Levels"} />}
            </div>
            <div>
              {!notifications && (
                <div className="flex justify-between items-center bg-white w-[911px] h-[63px] rounded-[15px]">
                  <div className="flex ml-5">
                    <img src="/icondashboardaqi.png" alt="" className="mr-3" />
                    <span className="text-[20px]">AQI</span>
                  </div>
                  <div className="mr-5">
                    <img src="/icondashboarddownarrow.png" alt="" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center items-center">
              <div> {!notifications && <AQI activeRoomId={activeRoomId}/>} </div>
            </div>
            <div>
              {!notifications && (
                <div className="flex justify-between items-center bg-white w-[911px] h-[63px] mt-20 mb-5 rounded-[15px]">
                  <div className="flex ml-5">
                    <img src="/icondashboardwqi.png" alt="" className="mr-3" />
                    <span className="text-[20px]">WQI</span>
                  </div>
                  <div className="mr-5">
                    <img src="/icondashboarddownarrow.png" alt="" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center items-center">
              <div>{!notifications && <WQI activeRoomId={activeRoomId}/>}</div>
            </div>
          </div>
        </div>
      </div>
      
      

    </div>
  );
}



/*

<div>
        {!notifications && (
          <div>
            <pre>{JSON.stringify(sensorData, null, 2)}</pre>
          </div>
        )}
      </div>

*/

/*
  <div>
        {status === "loading" && <p>Loading sensor data...</p>}
        {status === "failed" && <p>Error: {error}</p>}
      </div>
*/
