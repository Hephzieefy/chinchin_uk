"use client";

const OPTIONS = [
  {
    value: "delivery",
    label: "Ship to my address",
    sub: "Arrives in 3–5 business days, packed fresh",
    price: "$10.99",
  },
  {
    value: "pickup",
    label: "Local pickup",
    sub: "Manchester — ready in 24 hours",
    price: "Free",
  },
];

export default function FulfillmentSelector({ value, onChange }) {
  return (
    <div className="rounded-lg border border-line bg-cream-100 p-[26px]">
      <h2 className="mb-[18px] text-[1.15rem] text-cocoa-950">Fulfillment</h2>
      <div role="radiogroup" aria-label="Fulfillment method">
        {OPTIONS.map((option) => {
          const selected = value === option.value;
          return (
            <label
              key={option.value}
              className={[
                "mb-2.5 flex cursor-pointer items-start gap-3 rounded-xl border-[1.5px] p-3.5 last:mb-0",
                selected ? "border-gold-500 bg-gold-500/[0.06]" : "border-line hover:border-gold-500",
              ].join(" ")}
            >
              <input
                type="radio"
                name="fulfillment"
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
                className="mt-[3px] w-auto"
              />
              <div>
                <div className="text-[0.95rem] font-semibold text-cocoa-950">
                  {option.label}
                </div>
                <div className="text-[0.82rem] text-ink-soft">{option.sub}</div>
              </div>
              <span className="ml-auto font-mono font-bold text-cocoa-950">
                {option.price}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
