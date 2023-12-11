"use client";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal, remove } from "@/redux/Cartslice";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string];
}
export default function Cart() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state: any) => state.Cart
  );

  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(cartTotal(cart));
  }, [cart]);
  const handleQuantityChange = (id: number, quantity: any) => {};

  return (
    <div className="  p-8 bg-white shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cart?.length > 0 ? (
        cart?.map(({ id, title, price, description, quantity }: any) => {
          return (
            <div className="gap-8 border w-full" key={id}>
              <div className="bg-gray-200 p-4 rounded-md shadow-md border-4 flex justify-between">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>

                <p className="text-gray-800 font-semibold mb-2">${price}</p>
                <div className="flex items-center">
                  <label className="mr-2">Quantity:</label>
                  <div className="flex flex-row items-center">
                    <button className="bg-[#e30217] py-2 px-4 rounded-lg text-white text-3xl">
                      -
                    </button>
                    <span className="py-4 px-6 rounded-lg">{quantity}</span>
                    <button className="bg-[#e30217] py-2 px-4 rounded-lg text-white text-3xl">
                      +
                    </button>
                    <button
                      className="bg-[#e30217] py-2 px-4 rounded-lg text-white text-xl ml-4"
                      onClick={() => dispatcher(remove(id))}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h1>no cart products</h1>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
        <div className="flex justify-between items-center border-t border-b py-2">
          <span className="text-gray-600">Cart Quantity:</span>
          <span className="text-gray-800 font-semibold">${totalQuantity}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600">Total Price:</span>
          <span className="text-gray-800 font-semibold">${totalPrice}</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
}
