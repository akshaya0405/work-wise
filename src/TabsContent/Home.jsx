import React from "react";
import { home, calender } from "../assets/index";
import { format } from "date-fns";

const Home = () => {
  const today = new Date();
  const formattedDate = format(today, "do MMMM, yyyy");
  const formattedDay = format(today, "EEEE");

  return (
    <div className="flex items-center space-x-[620px] relative ">
      <div className="flex flex-col left-32 absolute items-center top-20 ">
        <h1 className="text-white font-semibold text-[28px]">
          Welcome to{" "}
          <span className="text-lime-200 font-bold italic">WorkWise</span>
        </h1>
        <h1 className="font-bold text-[48px] text-indigo-950 selection:text-green-400 selection:bg-white">
          Boost Productivity
        </h1>
        <h2 className="font-medium text-blue-800 text-[28px] font-sans -m-3  tracking-wider ">
          Make Today Productive!
        </h2>
        <div>
          {/* <img src={calender} className="h-40 w-auto " alt="" /> */}
          <div className="mt-7">
            <div className="flex justify-center space-x-36 -mb-10 ">
              <div className="h-6 w-2 rounded-md border-[1.5px] border-white bg-slate-500 shadow-xl"></div>
              <div className="h-6 w-2 rounded-md border-[1.5px] border-white bg-slate-500 shadow-xl"></div>
            </div>
            <div className="bg-white h-28 w-52 rounded-xl overflow-hidden mt-7 shadow-2xl">
              <div className="bg-red-400 h-7 w-52 shadow-md border-b-[1.5px] border-b-neutral-700 "></div>
              <div className="flex flex-col items-center justify-center mt-4">
                <p className="font-extrabold text-indigo-950 ">
                  {formattedDate}
                </p>
                <p className="font-bold italic text-violet-950 ">
                  {formattedDay}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={home} className="h-96 w-auto" />
    </div>
  );
};

export default Home;
