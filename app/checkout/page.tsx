"use client";
import React from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const { cart, totalPrice, totalQuantity } = useSelector(
    (store: any) => store.Cart
  );
  console.log("cart:", cart);

  return (
    <>
      <div className="p-8 bg-white flex items-center justify-center ">
        <div className="w-[70%] shadow-2xl rounded-lg flex-col justify-center items-center ">
          <div className="flex  justify-center w-full border-b border-gray-500">
            <h1 className="text-2xl font-semibold ">Checkout</h1>
          </div>
          <div className="border-black border-5 p-8 flex  items-center justify-evenly gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
              {cart.map((cartItem: any) => {
                return (
                  <div className="flex justify-between mb-2">
                    <span>{cartItem.title}</span>
                    <span>
                      <span>&#8377;</span>
                      {cartItem.price * cartItem.quantity}
                    </span>
                  </div>
                );
              })}

              <div className="border-t py-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  {" "}
                  <span>&#8377;</span>
                  {totalPrice}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl font-semibold ">Shipping Information</h2>
              <div className="">
                <span className="font-semibold">Name:</span>
                <span>Subham</span>
              </div>
              <div className="">
                <span className="font-semibold">Address:</span>
                <span>14th cross Indiranagar , Bangalore</span>
              </div>
              <div className="">
                <span className="font-semibold">Email:</span>
                <span>deysubham999@gmail.com</span>
              </div>
              <div className="">
                <span className="font-semibold">Payment Method:</span>
                <span>Credit Card</span>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-8">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
