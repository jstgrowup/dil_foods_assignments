export interface ProductInterface {
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
  quantity: number;
}
export interface CartInterface {
  cart: ProductInterface[];
  totalPrice: number;
  totalQuantity: number;
}
