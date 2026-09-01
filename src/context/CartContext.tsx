import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { CartContext, CartItem, Product } from "./CartDefs";

export type { CartItem, Product } from "./CartDefs";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("unique-cart-v2");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem("unique-cart-v2", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, qtyToAdd: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      
      let numericPrice = 0;
      if (typeof product.price === "number") {
        numericPrice = product.price;
      } else if (typeof product.price === "string") {
        numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, "")) || 0;
      }

      if (existing) {
        toast.success(`Updated "${product.name}" quantity (${existing.quantity + qtyToAdd})`);
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item,
        );
      }
      
      toast.success(`Added "${product.name}" to cart`);
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: numericPrice,
          priceDisplay: product.priceDisplay || `₦${numericPrice.toLocaleString()}`,
          image: product.image,
          quantity: qtyToAdd,
          size: product.size || "Standard",
        },
      ];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from bag");
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
