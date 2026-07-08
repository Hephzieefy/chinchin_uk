import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cocoa-950 px-[5vw] pb-6 pt-[52px] text-cream-100/75">
      <div className="mx-auto grid max-w-[1280px] gap-10 border-b border-white/10 pb-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <h4 className="mb-3.5 text-base text-cream-100">Ẹ̀wà Chin Chin Co.</h4>
          <p className="text-[0.92rem] leading-[1.6]">
            Hand-twisted, nutmeg-spiced chin chin fried in small batches in Manchester,
            UK, and shipped fresh across the UK.
          </p>
        </div>

        <div>
          <h4 className="mb-3.5 text-base text-cream-100">Shop</h4>
          <ul className="m-0 grid list-none gap-[9px] p-0 text-[0.92rem]">
            <li>
              <Link href="/#shop" className="hover:text-gold-300">
                All sizes
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-gold-300">
                Our story
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-gold-300">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3.5 text-base text-cream-100">Contact</h4>
          <ul className="m-0 grid list-none gap-[9px] p-0 text-[0.92rem]">
            <li>0161 496 0472</li>
            <li>sales@ewachinchin.com</li>
            <li>Manchester, M1 1AE</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-[18px] flex max-w-[1280px] flex-wrap justify-between gap-2 text-[0.8rem]">
        <span>© 2026 Ẹ̀wà Chin Chin Co. All rights reserved.</span>
        <span>Prototype design — not a live store</span>
      </div>
    </footer>
  );
}
