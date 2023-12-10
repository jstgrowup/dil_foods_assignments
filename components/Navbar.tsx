"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoCartSharp } from "react-icons/io5";

function Navbar() {
  const router = useRouter();
  return (
    <div className="h-32 w-full flex border-cyan-950 bg-slate-100 justify-between">
      <img
        className="p-4 cursor-pointer"
        onClick={() => router.push("/products")}
        src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
        alt=""
      />
      <div className="flex justify-between  w-20 align-middle">
        <div
          className="text-5xl text-[#e30217]  flex items-center cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          <IoCartSharp />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
