"use client";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import { jsonAxiosForProducts } from "@/helpers/json-axios";
import { add } from "@/redux/Cartslice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
interface Product {
  id: number;
  title: string;
  description: string;
  quantity: number;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string];
}
interface Products {
  products: Product[];
}

export default function Products() {
  const { data } = useSelector((state: any) => state.Cart);

  const dispatcher = useDispatch();

  return (
    <div>
      {data.length === 0 && !data ? (
        <div className="w-full  flex items-center justify-center">
          <img
            src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 w-full  sm:grid-cols-1  ">
          {data?.map((item: any) => {
            return (
              <div key={item.id}>
                <Cards {...item} handleAdd={() => dispatcher(add(item))} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
