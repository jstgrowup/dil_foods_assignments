"use client";
import Cards from "@/components/Cards";
import { ProductInterface } from "@/helpers/interfaces";
import { jsonAxios } from "@/helpers/json-axios";
import { add, cartTotal } from "@/redux/Cartslice";
import { useEffect, useState } from "react";
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
const fetchData = async () => {
  try {
    const data: Products = await jsonAxios({
      url: "https://dummyjson.com/products",
      method: "GET",
    });

    return data?.products;
  } catch (error) {
    throw error;
  }
};
export default function Products() {
  const [data, setdata] = useState<Product[]>([]);
  const [error, seterror] = useState("");
  const dispatcher = useDispatch();
  const { cart } = useSelector((state: any) => state.Cart);
  const handleAdd = (product: any): any => {
    if (!product.quantity) {
      product.quantity = 1;
    }
    dispatcher(add(product));
    dispatcher(cartTotal(cart));
  };
  useEffect(() => {
    fetchData()
      .then((result: ProductInterface[]) => {
        setdata(result);
      })
      .catch((error: any) => {
        seterror(error.message);
      })
      .finally(() => {});
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 w-full  sm:grid-cols-1  ">
      {data?.map((item: ProductInterface) => {
        return (
          <div key={item.id}>
            <Cards {...item} handleAdd={() => handleAdd(item)} />
          </div>
        );
      })}
    </div>
  );
}
