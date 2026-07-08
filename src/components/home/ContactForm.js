"use client";

import { useId, useState } from "react";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Textarea from "@/components/shared/Textarea";
import Eyebrow from "@/components/shared/Eyebrow";
import PhoneOutlineIcon from "@/components/shared/icons/PhoneOutlineIcon";
import EnvelopeOutlineIcon from "@/components/shared/icons/EnvelopeOutlineIcon";
import MapPinOutlineIcon from "@/components/shared/icons/MapPinOutlineIcon";

const CONTACT_CARDS = [
  {
    icon: PhoneOutlineIcon,
    label: "Call us",
    value: "(214) 865-8471",
    href: "tel:2148658471",
  },
  {
    icon: EnvelopeOutlineIcon,
    label: "Email us",
    value: "sales@ewachinchin.com",
    href: "mailto:sales@ewachinchin.com",
  },
  {
    icon: MapPinOutlineIcon,
    label: "Kitchen & pickup",
    value: "Oak Point, TX 75068",
    href: null,
  },
];

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function ContactForm() {
  const idPrefix = useId();
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
  }

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-[5vw] py-16">
      <div className="mb-10 max-w-[640px]">
        <Eyebrow>Get in touch</Eyebrow>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] text-cocoa-950">
          Questions about an order, bulk gifting, or wholesale?
        </h2>
        <p className="mt-3.5 text-[1.05rem] leading-[1.6] text-ink-soft">
          Reach us directly, or send a note below — we typically reply within one
          business day.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid content-start gap-4">
          {CONTACT_CARDS.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-start gap-3.5 rounded-md border border-line bg-cream-100 p-5"
            >
              <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] bg-gold-500">
                <Icon className="h-[18px] w-[18px] text-cocoa-950" />
              </span>
              <div>
                <strong className="mb-0.5 block font-display text-cocoa-950">
                  {label}
                </strong>
                {href ? (
                  <a href={href} className="text-[0.92rem] text-ink-soft no-underline hover:text-terracotta-600">
                    {value}
                  </a>
                ) : (
                  <span className="text-[0.92rem] text-ink-soft">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-lg border border-line bg-cream-100 p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              id={`${idPrefix}-name`}
              label="Your name"
              required
              placeholder="Ada Okafor"
              value={form.name}
              onChange={handleChange("name")}
            />
            <Input
              id={`${idPrefix}-email`}
              label="Email"
              type="email"
              required
              placeholder="ada@email.com"
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>
          <Textarea
            id={`${idPrefix}-message`}
            label="Message"
            required
            placeholder="Tell us what you need..."
            value={form.message}
            onChange={handleChange("message")}
          />
          <Button type="submit" variant="dark" className="justify-self-start">
            Send message
          </Button>
          {submitted ? (
            <p role="status" className="m-0 text-[0.88rem] text-palm-600">
              Thanks — we&rsquo;ll get back to you within one business day.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
