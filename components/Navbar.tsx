"use client";
import React from "react";
import { IoCartSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className="h-32  w-full flex border-cyan-950 bg-slate-100 justify-between">
      <img
        className="p-4"
        src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
        alt=""
      />
      <div className="flex justify-between border-black border w-60 align-middle">
        <div className="text-6xl text-[#e30217] border flex items-center">
          <IoCartSharp />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
