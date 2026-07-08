"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import BrandMarkIcon from "@/components/shared/icons/BrandMarkIcon";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Shop", href: "/#shop" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-cocoa-950 text-cream-100">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-cocoa-800 px-[5vw] py-2 text-[12.5px] tracking-[0.02em] text-cream-50">
        <div className="flex flex-wrap gap-[22px]">
          <a href="tel:01614960472" className="no-underline hover:text-gold-300">
            <span aria-hidden="true">📞</span> 0161 496 0472
          </a>
          <a
            href="mailto:sales@ewachinchin.com"
            className="no-underline hover:text-gold-300"
          >
            <span aria-hidden="true">✉️</span> sales@ewachinchin.com
          </a>
        </div>
        <span>Hand-twisted in Manchester, UK</span>
      </div>

      <nav className="flex items-center justify-between px-[5vw] py-3.5" aria-label="Primary">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <BrandMarkIcon className="h-[42px] w-[42px]" />
          <span className="text-[1.28rem] font-display leading-[1.05] text-cream-100">
            Ẹ̀wà
            <em className="block text-[0.62em] font-medium text-gold-400">
              Chin Chin Co.
            </em>
          </span>
        </Link>

        <ul className="hidden list-none items-center gap-[34px] p-0 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="border-b-2 border-transparent px-0.5 py-1.5 text-[0.95rem] tracking-[0.02em] text-cream-100 no-underline hover:border-gold-400 hover:text-gold-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[18px]">
          <Link
            href="/cart"
            aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
            className="flex items-center gap-2 rounded-md border-[1.5px] border-white/25 px-4 py-[9px] text-[0.9rem] text-cream-100 no-underline hover:border-gold-400 hover:text-gold-300"
          >
            <span aria-hidden="true">🧺</span> Cart
            <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-terracotta-600 px-[5px] font-mono text-[11px] text-white">
              {count}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
