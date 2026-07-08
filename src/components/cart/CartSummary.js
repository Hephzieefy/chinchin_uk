"use client";

import { useCart } from "@/context/CartContext";
import Button from "@/components/shared/Button";

const SHIPPING_ESTIMATE = 10.99;
const money = (n) => `$${n.toFixed(2)}`;

export default function CartSummary() {
  const { items, subtotal } = useCart();
  const hasItems = items.length > 0;
  const shipping = hasItems ? SHIPPING_ESTIMATE : 0;

  return (
    <div className="rounded-lg border border-line bg-cream-100 p-[26px]">
      <h2 className="mb-[18px] text-[1.15rem] text-cocoa-950">Cart totals</h2>

      <div className="flex justify-between py-[9px] text-[0.95rem] text-ink-soft">
        <span>Subtotal</span>
        <span className="font-mono">{money(subtotal)}</span>
      </div>
      <div className="flex justify-between py-[9px] text-[0.95rem] text-ink-soft">
        <span>Estimated shipping</span>
        <span className="font-mono">{hasItems ? money(SHIPPING_ESTIMATE) : "—"}</span>
      </div>
      <div className="mt-2 flex justify-between border-t-[1.5px] border-line pt-4 text-[1.2rem] font-bold text-cocoa-950">
        <span>Total</span>
        <span className="font-mono">{money(subtotal + shipping)}</span>
      </div>

      <Button
        href={hasItems ? "/checkout" : undefined}
        disabled={!hasItems}
        variant="primary"
        block
        className="mt-[18px]"
      >
        Proceed to checkout
      </Button>
    </div>
  );
}
