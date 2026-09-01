import { createContext } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number; // Storing as numeric NGN
  priceDisplay?: string;
  image: string;
  quantity: number;
  size?: string;
}

export interface Product {
  id: number;
  name: string;
  price: string | number;
  priceDisplay?: string;
  image: string;
  quantity?: number;
  size?: string;
  category?: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
