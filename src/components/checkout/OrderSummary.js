"use client";

import { useCart } from "@/context/CartContext";
import Button from "@/components/shared/Button";

const money = (n) => `$${n.toFixed(2)}`;

export default function OrderSummary({ formId, fulfillment, shipping, submitting }) {
  const { items, subtotal } = useCart();
  const total = subtotal + shipping;

  return (
    <div className="rounded-lg border border-line bg-cream-100 p-[26px]">
      <h2 className="mb-[18px] text-[1.15rem] text-cocoa-950">Order summary</h2>

      <div>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b border-dashed border-line py-2 text-[0.9rem]"
          >
            <span>
              <span className="font-semibold text-cocoa-950">{item.name}</span>
              <span className="block text-[0.8rem] text-ink-soft">
                {item.qty} × {money(item.price)}
              </span>
            </span>
            <span className="font-mono">{money(item.price * item.qty)}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between py-[9px] text-[0.95rem] text-ink-soft">
        <span>Subtotal</span>
        <span className="font-mono">{money(subtotal)}</span>
      </div>
      <div className="flex justify-between py-[9px] text-[0.95rem] text-ink-soft">
        <span>{fulfillment === "pickup" ? "Pickup" : "Shipping"}</span>
        <span className="font-mono">{shipping === 0 ? "Free" : money(shipping)}</span>
      </div>
      <div className="mt-2 flex justify-between border-t-[1.5px] border-line pt-4 text-[1.2rem] font-bold text-cocoa-950">
        <span>Total</span>
        <span className="font-mono">{money(total)}</span>
      </div>

      <Button
        type="submit"
        form={formId}
        variant="primary"
        block
        disabled={submitting}
        className="mt-[18px]"
      >
        {submitting ? "Placing order…" : "Place order"}
      </Button>
      <Button href="/cart" variant="ghost" block className="mt-2.5">
        ← Back to cart
      </Button>
    </div>
  );
}
