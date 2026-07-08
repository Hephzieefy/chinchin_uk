"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartLineItem from "@/components/cart/CartLineItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import Button from "@/components/shared/Button";

export default function CartPage() {
  const { items } = useCart();

  return (
    <>
      <div className="bg-cocoa-950 px-[5vw] pb-[34px] pt-10 text-cream-100">
        <div className="mx-auto max-w-[1000px]">
          <nav aria-label="Breadcrumb" className="mb-3.5 flex items-center gap-2.5 font-mono text-[0.82rem] text-cream-100/60">
            <Link href="/#shop" className="hover:text-gold-300">
              Shop
            </Link>
            <span aria-hidden="true" className="opacity-50">
              /
            </span>
            <span className="text-gold-300">Your cart</span>
            <span aria-hidden="true" className="opacity-50">
              /
            </span>
            <span>Checkout</span>
          </nav>
          <h1 className="text-[2.1rem] text-cream-100">Your cart</h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1000px] items-start gap-9 px-[5vw] py-10 pb-[90px] lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="rounded-lg border border-line bg-cream-100 p-[26px]">
            {items.length > 0 ? (
              <>
                <h2 className="mb-[18px] text-[1.15rem] text-cocoa-950">
                  Items in your cart
                </h2>
                {items.map((item) => (
                  <CartLineItem key={item.id} item={item} />
                ))}
              </>
            ) : (
              <EmptyCart />
            )}
          </div>
          <Button href="/#shop" variant="ghost" size="sm" className="mt-[18px]">
            ← Continue shopping
          </Button>
        </div>

        <CartSummary />
      </div>
    </>
  );
}
