"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "@/context/CartContext";
import NuggetClusterIcon from "@/components/shared/icons/NuggetClusterIcon";
import CheckIcon from "@/components/shared/icons/CheckIcon";

const money = (n) => `$${n.toFixed(2)}`;

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  function handleAdd() {
    addItem(product, 1);
    setAdded(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAdded(false), 1100);
  }

  return (
    <div className="relative flex flex-col rounded-lg border border-line bg-cream-100 p-5 pb-5 shadow-soft">
      <span className="absolute left-4 top-4 z-10 rounded-full bg-terracotta-600 px-[9px] py-1 font-mono text-[10.5px] uppercase tracking-[0.05em] text-white">
        {product.badge}
      </span>

      <div className="relative mb-[18px] flex aspect-[1/0.82] items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-[#fbe4b8] to-[#f2c579]">
        <NuggetClusterIcon className="h-[78%] w-[78%]" />
        <div className="absolute bottom-[10px] right-[10px] -rotate-3 rounded-lg border-[1.5px] border-dashed border-terracotta-600 bg-cream-100 px-2.5 py-[5px] font-mono text-[0.92rem] font-bold text-terracotta-700">
          {money(product.price)}
        </div>
      </div>

      <h3 className="mb-1.5 text-[1.2rem] text-cocoa-950">{product.name}</h3>
      <p className="mb-4 flex-grow text-[0.9rem] leading-[1.5] text-ink-soft">
        {product.desc}
      </p>

      <div className="mb-3.5 flex items-baseline justify-between">
        <span className="font-mono text-[1.15rem] font-bold text-cocoa-950">
          {money(product.price)}
        </span>
        <span className="text-[0.78rem] text-ink-soft">{product.unit}</span>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className={[
          "flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-[0.9rem] font-semibold transition-colors",
          added
            ? "bg-palm-600 text-white"
            : "bg-cocoa-950 text-cream-100 hover:bg-gold-500 hover:text-cocoa-950",
        ].join(" ")}
      >
        {added ? (
          <>
            <CheckIcon className="h-4 w-4" /> Added
          </>
        ) : (
          <>
            <span aria-hidden="true">+</span> Add to cart
          </>
        )}
        <span className="sr-only" aria-live="polite">
          {added ? `${product.name} added to cart` : ""}
        </span>
      </button>
    </div>
  );
}
