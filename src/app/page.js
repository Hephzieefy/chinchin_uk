import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProductGrid from "@/components/home/ProductGrid";
import ContactForm from "@/components/home/ContactForm";
import Eyebrow from "@/components/shared/Eyebrow";
import TwistDividerIcon from "@/components/shared/icons/TwistDividerIcon";
import { getProducts } from "@/lib/api/products";

export default async function Home() {
  const products = await getProducts();
  const fromPrice = Math.min(...products.map((product) => product.price));

  return (
    <>
      <Hero fromPrice={fromPrice} />

      <div className="mx-auto h-[26px] max-w-[1280px] px-[5vw]">
        <TwistDividerIcon className="h-full w-full" />
      </div>

      <About />

      <section id="shop" className="rounded-none bg-cocoa-950 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-[5vw] py-16">
          <div className="mb-10 max-w-[640px]">
            <Eyebrow>Shop</Eyebrow>
            <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] text-cream-100">
              Pick your twist size
            </h2>
            <p className="mt-3.5 text-[1.05rem] leading-[1.6] text-cream-100/70">
              All sizes come coated in toasted coconut and a whisper of nutmeg sugar.
              Add straight to your cart below.
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>

      <ContactForm />
    </>
  );
}
