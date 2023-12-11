"use client";
import { cartTotal } from "@/redux/Cartslice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const router = useRouter();
  const dispatcher = useDispatch();
  const { totalQuantity } = useSelector((store: any) => store.Cart);

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
          className="text-5xl text-[#e30217]  flex items-center cursor-pointer relative"
          onClick={() => router.push("/cart")}
        >
          <IoCartSharp />
        </div>
        <div className="absolute top-7 right-8 w-6 flex align-middle justify-center border bg-[#e30217] text-white rounded-2xl">
          <p>{totalQuantity}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
