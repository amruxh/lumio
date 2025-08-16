"use client";

import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { getProductById } from "@/services/productService";
import Link from "next/link";
import CartProduct from "@/components/cart/cartProduct";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";

const CartPage = () => {
  const { cart, clearCart } = useCart();
  const [products, setProducts] = useState<(Product | null)[]>([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      const data = await Promise.all(
        cart.map((item) => getProductById(item?.id))
      );
      setProducts(data);
    };
    if (cart.length > 0) fetchCartProducts();
    else setProducts([]);
  }, [cart]);

  const total = useMemo(() => {
    return products.reduce((sum, product) => {
      if (!product) return sum;
      const cartItem = cart.find((item) => item.id === product.id);
      const quantity = cartItem?.length ?? 1;
      return sum + Math.floor(product.price * 80) * quantity;
    }, 0);
  }, [products, cart]);

  return (
    <section className="container mx-auto my-8 px-6 md:px-10">
      <h2 className="text-center mb-6 text-2xl font-bold flex justify-center items-center gap-2">
        <ShoppingCart className="w-6 h-6" />
        {cart.length} {cart.length === 1 ? "Item" : "Items"} in your Cart
      </h2>

      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Cart Items */}
          <div className="flex-1 flex flex-wrap gap-4 justify-start">
            {products.map((product) => (
              <CartProduct key={product?.id} product={product} />
            ))}
          </div>

          {/* Right: Summary */}
          <div className="w-full lg:w-[30%] p-3">
            <div className="bg-[var(--card-background)] border border-[var(--border)] p-5 rounded-xl shadow sticky top-24">
              <h4 className="text-xl font-semibold mb-4">Proceed to Checkout</h4>
              <div className="text-lg mb-3">
                Grand Total:
                <span className="font-bold text-green-600 ml-2">₹{total}</span>
              </div>
              <Link
                href="/checkout/cart"
                className="mt-4 inline-block w-full text-center px-5 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-[var(--background)] font-bold shadow-md transition duration-200"
              >
                Buy All Items
              </Link>
              <button
                onClick={clearCart}
                className="mt-4 inline-block w-full text-center px-5 py-2 rounded-full bg-gray-600 hover:bg-[var(--card-background)] hover:text-[var(--foreground)] text-[var(--background)] cursor-pointer font-bold shadow-md transition duration-200"
              >
                Clear cart
              </button>

            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10 text-lg text-gray-500">
          🛍️ Your cart is empty. Start shopping now!
        </div>
      )}
    </section>
  );
};

export default CartPage;
