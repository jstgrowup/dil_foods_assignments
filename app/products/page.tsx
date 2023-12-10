"use client";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import { jsonAxiosForProducts } from "@/helpers/json-axios";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import {useDispatch} from "react-redux"
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
interface Products {
  products: Product[];
}

const fetchData = async () => {
  try {
    const data: Products = await jsonAxiosForProducts({
      url: "https://dummyjson.com/products",
      method: "GET",
    });
    console.log("data:", data);
    return data?.products;
  } catch (error) {}
};
export default function Products() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState<Product[]>([]);
  const [error, seterror] = useState("");
  let dispatcher=usedis

  useEffect(() => {
    setloading(true);
    fetchData()
      .then((result: any) => {
        setdata(result);
        setloading(false);
      })
      .catch((error: any) => {
        seterror(error.message);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="w-full  flex items-center justify-center">
          <img
            src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 w-full  sm:grid-cols-1  ">
          {data?.map((item: Product) => {
            return (
              <Link href={`/products/${item.id}`} key={item.id}>
                <Cards {...item} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
