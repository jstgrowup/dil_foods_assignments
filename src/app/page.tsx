"use client";
import Image from "next/image";
import { IoCartSharp } from "react-icons/io5";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../components/Cards";

const getProducts = async () => {
  try {
    const data: any = await axios.get("https://dummyjson.com/products");
    console.log("data:here", data);
    return data?.data?.products;
  } catch (error) {
    return error;
  }
};
export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("data:", data);

        return setdata(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-3 gap-4 w-[1200px]">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />



        {/* {data?.map((item: any) => {
          return (
            <>
            </>
          );
        })} */}
      </div>
    </>
  );
}
