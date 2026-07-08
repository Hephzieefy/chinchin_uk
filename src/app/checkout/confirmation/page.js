"use client";

import { useCart } from "@/context/CartContext";
import Button from "@/components/shared/Button";
import CheckIcon from "@/components/shared/icons/CheckIcon";

export default function ConfirmationPage() {
  const { lastOrder } = useCart();

  if (!lastOrder) {
    return (
      <div className="mx-auto max-w-[640px] px-[5vw] py-[100px] text-center">
        <h1 className="mb-3 text-[2.1rem] text-cocoa-950">No recent order found</h1>
        <p className="mb-[30px] text-[1.02rem] leading-[1.6] text-ink-soft">
          We couldn&rsquo;t find an order for this session. If you just placed one,
          check your email for confirmation — otherwise head back to the shop.
        </p>
        <Button href="/" variant="primary">
          Back to shop
        </Button>
      </div>
    );
  }

  const fulfillmentMessage =
    lastOrder.fulfillment === "pickup"
      ? "Your order will be ready for pickup in Manchester within 24 hours."
      : "Your order will ship within 3–5 business days.";

  return (
    <div className="mx-auto max-w-[640px] px-[5vw] py-[100px] text-center">
      <div className="mx-auto mb-[26px] flex h-[78px] w-[78px] items-center justify-center rounded-full bg-palm-600 text-white">
        <CheckIcon className="h-9 w-9" />
      </div>
      <h1 className="mb-3 text-[2.1rem] text-cocoa-950">Order placed — thank you!</h1>
      <p className="mb-[30px] text-[1.02rem] leading-[1.6] text-ink-soft">
        {fulfillmentMessage} A confirmation has been sent to your email.
      </p>
      <div className="mb-[34px] inline-block rounded-[10px] border-[1.5px] border-dashed border-terracotta-600 bg-cream-100 px-[22px] py-2.5 font-mono font-bold text-terracotta-700">
        ORDER #{lastOrder.orderId}
      </div>
      <div>
        <Button href="/" variant="primary">
          Back to shop
        </Button>
      </div>
    </div>
  );
}
