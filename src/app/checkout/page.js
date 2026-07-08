"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/lib/api/orders";
import FulfillmentSelector from "@/components/checkout/FulfillmentSelector";
import ShippingAddressForm from "@/components/checkout/ShippingAddressForm";
import BillingForm from "@/components/checkout/BillingForm";
import OrderSummary from "@/components/checkout/OrderSummary";

const FORM_ID = "checkout-form";
const SHIPPING_RATE = 10.99;
const EMAIL_PATTERN = /\S+@\S+\.\S+/;

const INITIAL_SHIPPING = {
  sFirst: "",
  sLast: "",
  sStreet: "",
  sCity: "",
  sState: "",
  sZip: "",
  sPhone: "",
};

const INITIAL_BILLING = { bFirst: "", bLast: "", bStreet: "" };

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart, setLastOrder } = useCart();

  const [fulfillment, setFulfillment] = useState("delivery");
  const [shippingValues, setShippingValues] = useState(INITIAL_SHIPPING);
  const [billSame, setBillSame] = useState(true);
  const [billingValues, setBillingValues] = useState(INITIAL_BILLING);
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (!orderPlaced && items.length === 0) {
      router.replace("/cart");
    }
  }, [items.length, orderPlaced, router]);

  const shippingCost = items.length === 0 ? 0 : fulfillment === "pickup" ? 0 : SHIPPING_RATE;

  function handleShippingChange(field, value) {
    setShippingValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleBillingChange(field, value) {
    setBillingValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const nextErrors = {};

    if (fulfillment === "delivery") {
      if (!shippingValues.sFirst.trim()) nextErrors.sFirst = "Enter your first name.";
      if (!shippingValues.sLast.trim()) nextErrors.sLast = "Enter your last name.";
      if (!shippingValues.sStreet.trim()) nextErrors.sStreet = "Enter a street address.";
      if (!shippingValues.sCity.trim()) nextErrors.sCity = "Enter a city.";
      if (!shippingValues.sState) nextErrors.sState = "Select a state.";
      if (!shippingValues.sZip.trim()) nextErrors.sZip = "Enter a ZIP code.";
      if (!shippingValues.sPhone.trim()) nextErrors.sPhone = "Enter a phone number.";
    }

    if (!EMAIL_PATTERN.test(email)) nextErrors.cEmail2 = "Enter a valid email.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (items.length === 0 || !validate()) return;

    setSubmitting(true);
    const orderPayload = {
      items,
      subtotal,
      shipping: shippingCost,
      total: subtotal + shippingCost,
      fulfillment,
      shippingAddress: fulfillment === "delivery" ? shippingValues : null,
      billing: billSame ? "same_as_shipping" : billingValues,
      email,
      notes,
    };

    const result = await createOrder(orderPayload);

    setOrderPlaced(true);
    setLastOrder({ ...result, fulfillment });
    clearCart();
    router.push("/checkout/confirmation");
  }

  return (
    <>
      <div className="bg-cocoa-950 px-[5vw] pb-[34px] pt-10 text-cream-100">
        <div className="mx-auto max-w-[1000px]">
          <nav aria-label="Breadcrumb" className="mb-3.5 flex items-center gap-2.5 font-mono text-[0.82rem] text-cream-100/60">
            <Link href="/#shop" className="hover:text-gold-300">
              Shop
            </Link>
            <span aria-hidden="true" className="opacity-50">
              /
            </span>
            <Link href="/cart" className="hover:text-gold-300">
              Cart
            </Link>
            <span aria-hidden="true" className="opacity-50">
              /
            </span>
            <span className="text-gold-300">Checkout</span>
          </nav>
          <h1 className="text-[2.1rem] text-cream-100">Checkout</h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1000px] items-start gap-9 px-[5vw] py-10 pb-[90px] lg:grid-cols-[1.5fr_1fr]">
        <form id={FORM_ID} onSubmit={handleSubmit} noValidate className="grid gap-5">
          <FulfillmentSelector value={fulfillment} onChange={setFulfillment} />

          {fulfillment === "delivery" ? (
            <ShippingAddressForm
              values={shippingValues}
              errors={errors}
              onChange={handleShippingChange}
            />
          ) : null}

          <BillingForm
            billSame={billSame}
            onToggleBillSame={setBillSame}
            values={billingValues}
            onChange={handleBillingChange}
            email={email}
            onEmailChange={setEmail}
            emailError={errors.cEmail2}
            notes={notes}
            onNotesChange={setNotes}
          />
        </form>

        <OrderSummary
          formId={FORM_ID}
          fulfillment={fulfillment}
          shipping={shippingCost}
          submitting={submitting}
        />
      </div>
    </>
  );
}
