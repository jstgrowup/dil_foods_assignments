"use client";
import React from "react";
interface Product {
  brand: string;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}
function Cards({ brand, title, price, thumbnail, rating }: Product) {
  return (
    <div className="  bg-white flex flex-col rounded-md  text-center border shadow-2xl cursor-pointer ">
      <img
        src={thumbnail}
        alt="product"
        className=" md:w-full rounded-t-lg h-48"
      />

      <div className="p-3 flex flex-col items-center">
        <p className="">{brand}</p>
        <h3 className="font-bold text-xl mb-">{title}</h3>
        <div className=" flex justify-center items-center gap-4">
          <h2 className="font-bold text-2xl">{price}</h2>
          <p className="text-green-500">{rating}</p>
        </div>
        <button className="font-bold uppercase bg-sky-600 rounded-md text-white py-2 px-5 cursor-pointer transition-colors hover:bg-sky-700 text-sm mt-5 w-full" onClick={()=>handleA}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Cards;
