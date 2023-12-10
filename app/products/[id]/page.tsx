"use client";
import { jsonAxiosForProducts } from "@/helpers/json-axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
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

function ProductDetailPage({ params }: { params: { id: string } }) {
  const [data, setdata] = useState<Product | null>(null);
  const [images, setimages] = useState<string[]>([""]);
  const [activeImage, setactiveImage] = useState<string>("");
  useEffect(() => {
    jsonAxiosForProducts({
      url: `https://dummyjson.com/products/${params?.id}`,
      method: "GET",
    })
      .then((result: Product) => {
        setdata(result);
        setimages(result?.images);
        setactiveImage(result?.thumbnail);
      })
      .catch((error: any) => {
        throw Object.assign(error);
      })
      .finally(() => {
        
      });
  }, []);

  return (
    <>
      <div className="w-full  flex flex-col justify-between lg:flex-row gap-24 lg:items-center lg:p-7 md:p-4">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImage}
            alt=""
            className="lg:w-full lg:h-[500px] md:h-[450px] object-fit rounded-xl"
          />
          <div className="grid lg:grid-cols-5 h-24 w-full  md:grid-cols-5 sm:grid-cols-5 gap-4">
            {images?.map((image: string) => {
              return (
                <div key={image}>
                  <img
                    className="lg:w-28 lg:h-24 md:w-26 md:h-26 sm:h-20 sm:w-20 rounded-md cursor-pointer "
                    src={image}
                    alt=""
                    onClick={(e: any) => setactiveImage(e.target.src)}
                  />
                  ;
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col lg:w-2/4 gap-3">
          <div>
            <span className="text-[#e30217] font-semibold">
              {data?.category}
            </span>
            <h2 className="text-3xl font-bold">{data?.title}</h2>
          </div>
          <p className="text-gray-700">{data?.description}</p>
          <h6 className="text-2xl font-semibold ">
            <span>&#x20B9;</span> {data?.price}
          </h6>

          <h6 className="text-2xl font-semibold ">
            Discount {data?.discountPercentage}% Off
          </h6>
          <div className="flex gap-3 text-[#e30217]">
            {Array.from({ length: Math.round(data?.rating!) }).map((_,index) => {
              return (
                <div key={index}>
                  <LiaStarSolid />
                </div>
              );
            })}
          </div>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button className="bg-gray-200 py-2 px-4 rounded-lg text-[#e30217] text-3xl">
                -
              </button>
              <span className="py-4 px-6 rounded-lg">1</span>
              <button className="bg-gray-200 py-2 px-4 rounded-lg text-[#e30217] text-3xl">
                +
              </button>
            </div>
            <button className="bg-[#e30217] text-white font-semibold py-3 px-6 rounded-xl h-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetailPage;
