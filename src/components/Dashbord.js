import logo1 from "../assets/logo1.png";
import { Popover } from "@headlessui/react";
import { FaUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdSpaceDashboard } from "react-icons/md";

export default function Dashbord() {
  return (
    <Popover className="relative">
      <div className="grid grid-cols-[100px,auto] ">
        <div className="h-[100vh]  bg-slate-700">
          <div className="flex justify-center py-3 bg-black">
            <img className="w-[60px] h-[60px] " src={logo1} alt="" />
          </div>

          <div className="mt-10 flex flex-col items-center">
            <MdSpaceDashboard size={50} className="text-white" />
            <p className="text-white">Dashbord</p>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <CiSettings size={50} className="text-white" />
            <p className="text-white">Settings</p>
          </div>
          <div className="mt-10  flex flex-col items-center">
            <FaUser size={50} className="text-white" />
            <p className="text-white">User</p>
          </div>
        </div>
        <div className="flex justify-between h-[84px] bg-gray-500 items-center">
          <h1 className="font-bold text-white text-2xl flex  ml-8">
            Main Dashbord
          </h1>
          <div className="font-bold text-white text-2xl">
            <p className="text-end">Friday,30 November 2022</p>
            <p className="text-end">10:19:00</p>
          </div>
        </div>
      </div>
    </Popover>
  );
}
