"use client";

import { useCart } from "@/context/CartContext";
import NuggetClusterIcon from "@/components/shared/icons/NuggetClusterIcon";

const money = (n) => `$${n.toFixed(2)}`;

export default function CartLineItem({ item }) {
  const { changeQty, removeItem } = useCart();

  return (
    <div className="grid grid-cols-[52px_1fr] items-center gap-x-4 gap-y-2.5 border-b border-line py-4 last:border-b-0 last:pb-1 sm:grid-cols-[64px_1fr_auto_auto] sm:gap-y-0">
      <div className="col-start-1 row-start-1 flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#fbe4b8] to-[#f2c579] sm:h-16 sm:w-16">
        <NuggetClusterIcon className="h-[70%] w-[70%]" />
      </div>

      <div className="col-start-2 row-start-1">
        <div className="font-display text-[1.02rem] font-semibold text-cocoa-950">
          {item.name}
        </div>
        <div className="mt-[3px] text-[0.8rem] text-ink-soft">
          {item.unit} · {money(item.price)} each
        </div>
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          aria-label={`Remove ${item.name} from cart`}
          className="mt-1 border-none bg-transparent p-0 text-[0.78rem] text-terracotta-600 underline"
        >
          Remove
        </button>
      </div>

      <div className="col-start-2 row-start-2 flex items-center overflow-hidden rounded-full border-[1.5px] border-line justify-self-start sm:col-start-3 sm:row-start-1 sm:justify-self-auto">
        <button
          type="button"
          onClick={() => changeQty(item.id, -1)}
          aria-label={`Decrease quantity of ${item.name}`}
          className="flex h-[30px] w-[30px] items-center justify-center border-none bg-transparent text-[1.05rem] text-cocoa-950 hover:bg-cream-50"
        >
          −
        </button>
        <span className="w-[26px] text-center font-mono text-[0.9rem]">{item.qty}</span>
        <button
          type="button"
          onClick={() => changeQty(item.id, 1)}
          aria-label={`Increase quantity of ${item.name}`}
          className="flex h-[30px] w-[30px] items-center justify-center border-none bg-transparent text-[1.05rem] text-cocoa-950 hover:bg-cream-50"
        >
          +
        </button>
      </div>

      <div className="col-start-2 row-start-3 min-w-16 text-left font-mono font-bold text-cocoa-950 sm:col-start-4 sm:row-start-1 sm:text-right">
        {money(item.price * item.qty)}
      </div>
    </div>
  );
}
