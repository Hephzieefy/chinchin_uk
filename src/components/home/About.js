import Eyebrow from "@/components/shared/Eyebrow";
import AboutMarkIcon from "@/components/shared/icons/AboutMarkIcon";
import CheckIcon from "@/components/shared/icons/CheckIcon";

const ABOUT_POINTS = [
  {
    title: "Small-batch fried",
    body: "never more than 40lb of dough a day, so every bag is fresh.",
  },
  {
    title: "No preservatives",
    body: "just flour, butter, sugar, nutmeg, and toasted coconut.",
  },
  {
    title: "Shipped across the US",
    body: "sealed fresh within 48 hours of frying, or pick up locally in Oak Point.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-[5vw] py-16">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg bg-cocoa-950 lg:aspect-[4/5]">
          <AboutMarkIcon className="h-[72%] w-[72%]" />
        </div>

        <div>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] text-cocoa-950">
            A family recipe, fried fresh in Texas
          </h2>
          <p className="mt-3.5 text-[1.05rem] leading-[1.6] text-ink-soft">
            Ẹ̀wà Chin Chin started in a home kitchen with one recipe passed down for
            three generations: hand-mixed dough, real butter, grated nutmeg, and just
            enough sugar to let the toast come through. We still cut and twist every
            piece by hand before it hits the fryer.
          </p>

          <ul className="mt-[26px] grid list-none gap-[18px] p-0">
            {ABOUT_POINTS.map((point) => (
              <li key={point.title} className="flex items-start gap-3.5 leading-[1.55] text-ink-soft">
                <span className="mt-0.5 flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-palm-600 text-white">
                  <CheckIcon className="h-[13px] w-[13px]" />
                </span>
                <span>
                  <strong className="font-display font-semibold text-cocoa-950">
                    {point.title}
                  </strong>{" "}
                  — {point.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
