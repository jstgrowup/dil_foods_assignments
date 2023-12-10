"use client";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
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
interface ApiResponse {
  data: Products; // Assuming products is an array of Product objects
}
const fetchData = async () => {
  try {
    const data: ApiResponse = await axios.get("https://dummyjson.com/products");
    console.log("data:", data);
    return data?.data?.products;
  } catch (error) {}
};
export default function Products() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState<Product[]>([]);
  const [error, seterror] = useState("");
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
      <Navbar />
      {loading ? (
        <div className="w-full border flex items-center justify-center">
          <img
            src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 w-full  sm:grid-cols-1 border border-black  ">
          {data?.map((item: any) => {
            return (
              <>
                <Cards {...item} />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}
