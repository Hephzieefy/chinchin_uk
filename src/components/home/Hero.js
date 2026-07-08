import Link from "next/link";
import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import BowlIcon from "@/components/shared/icons/BowlIcon";

const money = (n) => `$${n.toFixed(2)}`;

export default function Hero({ fromPrice }) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_60%_90%_at_85%_20%,rgba(214,138,45,0.16),transparent_60%)] bg-cream-50 px-[5vw] pb-10 pt-[76px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Eyebrow>Nutmeg-spiced · coconut-crusted · fried in small batches</Eyebrow>
          <h1 className="max-w-[11.5ch] text-[clamp(2.5rem,4.4vw,4rem)] leading-[1.04] text-cocoa-950">
            Hand-twisted chin chin, <em className="italic text-terracotta-600">toasted golden</em> the old way.
          </h1>
          <p className="my-[22px] max-w-[46ch] text-[1.14rem] leading-[1.55] text-ink-soft">
            Every twist is rolled and fried in small batches, just like a Lagos kitchen
            on a Sunday — now shipped fresh from Oak Point, Texas to your door.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/#shop" variant="primary">
              Shop chin chin
            </Button>
            <Button href="/#about" variant="ghost">
              Our story
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-[30px]">
            <div>
              <strong className="block font-display text-2xl text-cocoa-950">4</strong>
              <span className="text-[0.82rem] text-ink-soft">Pack sizes</span>
            </div>
            <div>
              <strong className="block font-display text-2xl text-cocoa-950">0</strong>
              <span className="text-[0.82rem] text-ink-soft">Preservatives added</span>
            </div>
            <div>
              <strong className="block font-display text-2xl text-cocoa-950">48hr</strong>
              <span className="text-[0.82rem] text-ink-soft">Fried-to-ship window</span>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] lg:h-[420px]">
          <div className="absolute right-[2%] top-[6%] rotate-[4deg] rounded-md border-[1.5px] border-line bg-cream-100 px-4 py-3 shadow-soft">
            <span className="font-mono text-[0.78rem] text-ink-soft">FROM</span>
            <br />
            <strong className="font-display text-[1.05rem] text-terracotta-600">
              {money(fromPrice)}
            </strong>
          </div>
          <div className="absolute inset-x-0 bottom-0 mx-auto h-[340px] w-full max-w-[420px]">
            <BowlIcon className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
