import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/LoginContext";
import { getProductById } from "@/services/productService";
import { Product } from "@/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CheckoutProduct = Product & { quantity: number | undefined };

const Checkout = ({ productId }: { productId: string | null }) => {
    const auth = useAuth();
    const router = useRouter();
    const { cart } = useCart();
    const [products, setProducts] = useState<CheckoutProduct[]>([]);

    useEffect(() => {
        if (!auth.isExists()) router.push('/login');
    }, [auth, router]);

useEffect(() => {
        const fetchProducts = async () => {
            if (productId === "cart") {
                if (cart.length > 0) {
                    const data = await Promise.all(
                        cart.map(async (item) => {
                            const product = await getProductById(item.id);
                            return { ...product, quantity: item.length };
                        })
                    );
                    setProducts(data as CheckoutProduct[]);
                } else {
                    setProducts([]);
                }
            } else {
                const id = Number(productId);
                if (!isNaN(id)) {
                    const product = await getProductById(id);
                    setProducts([{ ...product, quantity: 1 } as CheckoutProduct]);
                }
            }
        };

        fetchProducts();
    }, [cart, productId]);

    const toInr = (price: number) => Math.round((price ?? 0) * 80);
        const subtotal = products.reduce(
        (total, item) => total + toInr(item.price) * (item?.quantity || 1),
        0
    );

    return (
        <section className="checkout-page px-4 py-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section - Billing Details */}
            <div className="billing-section space-y-6">
                <h2 className="text-2xl font-bold">Billing Information</h2>

                <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="input-style" />
                    <input type="email" placeholder="Email Address" className="input-style" />
                    <input type="text" placeholder="Phone Number" className="input-style" />
                    <input type="text" placeholder="Address Line 1" className="input-style" />
                    <input type="text" placeholder="Address Line 2 (Optional)" className="input-style" />
                    <input type="text" placeholder="City" className="input-style" />
                    <input type="text" placeholder="State" className="input-style" />
                    <input type="text" placeholder="Postal Code" className="input-style" />
                    <input type="text" placeholder="Country" className="input-style" />
                </form>
            </div>

            {/* Right Section - Order Summary */}
            <div className="order-summary border-[var(--border)] bg-[var(--card-background)] p-6 rounded-xl space-y-6">
                <h2 className="text-2xl font-bold">Order Summary</h2>

                {/* List of items */}
                <div className="space-y-4">
                    {/* Sample product */}
                    <div className="flex items-center justify-between">
                        <span>Product Name x Qty</span>
                        <span>₹Price</span>
                    </div>
                    {/* Repeat this block for each product */}
                </div>

                {/* Summary */}
                <div className="border-t pt-4 space-y-2">
                    {products.map((product, index) => (
                        <div key={index} className="flex justify-between">
                            <span>{product?.title} x {product?.quantity}</span>
                            <span>₹{toInr(product?.price || 0) * (product?.quantity ?? 0)}</span>
                        </div>
                    ))}
                    <div className="border-t border-[var(--border)] mt-4 pt-2 flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>₹40</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>₹{(subtotal + 40).toFixed(2)}</span>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-2">
                    <h3 className="font-semibold">Payment Method</h3>
                    <select className="input-style">
                        <option value="cod">Cash on Delivery</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="upi">UPI</option>
                    </select>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-yellow-500 hover:bg-yellow-700 text-[var(--foreground)] cursor-pointer py-3 rounded-lg font-semibold">
                    Place Order
                </button>
            </div>
        </section>

    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const productId = context.params?.id;

    return {
        props: {
            productId: productId || null,
        },
    };
};

export default Checkout;