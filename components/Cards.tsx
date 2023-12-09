import React from "react";

function Cards() {
  return (
    <div className="h-64 w-24 bg-white flex flex-col rounded-md shadow-sm text-center border border-black">
      <div className="h-[50%]  border border-red-700">
        <img
          src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          alt="product"
          className=""
        />
      </div>
      <div>
        <h1>hello</h1>
      </div>
      {/* <div className="p-5 border-8 border-red-700">
        <p className="mb-2">subham</p>
        <h3 className="font-bold text-xl mb-2">playstation</h3>
        <div className="mt-3 flex justify-center items-center gap-4">
          <h2 className="font-bold text-2xl">343</h2>
          <p className="text-green-500">free shipping</p>
        </div>
        <button className="font-bold uppercase bg-sky-600 rounded-md text-white py-2 px-5 cursor-pointer transition-colors hover:bg-sky-700 text-sm mt-5 w-full">
          Order
        </button>
      </div> */}
    </div>
  );
}

export default Cards;
