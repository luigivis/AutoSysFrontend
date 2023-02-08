import React, { useState } from "react";
import {
  RiHome3Line,
  RiWalletLine,
  RiMore2Fill,
  RiCloseFill,
} from "react-icons/ri";
import  {TbReportAnalytics} from 'react-icons/tb';
import  {FaUserAlt} from 'react-icons/fa';
import  {HiOutlineUserGroup} from 'react-icons/hi';
import {sendGetLogOut} from "../../utils/commonFetch";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-[#FA6C17] h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
              src={require('../../assets/img/logo.png')}
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-xl text-white font-bold">Lapsys</h1>
        </div>
        {/* Nav */}
        <div className="bg-[#3F485B] p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll no-scrollbar flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
            <a
              href="/Dashboard"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiHome3Line /> Home
            </a>
            <a
              href="/users"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <FaUserAlt /> Users
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiWalletLine /> Inventory
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <HiOutlineUserGroup /> Employee
            </a>
            <a
                href="#"
                className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <TbReportAnalytics /> Reports
            </a>
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <button onClick={ sendGetLogOut }>Log Out</button>
          </div>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
