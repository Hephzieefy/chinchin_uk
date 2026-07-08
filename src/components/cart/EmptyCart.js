import Button from "@/components/shared/Button";
import EmptyCartBasketIcon from "@/components/shared/icons/EmptyCartBasketIcon";

export default function EmptyCart() {
  return (
    <div className="px-5 py-[50px] text-center">
      <EmptyCartBasketIcon className="mx-auto mb-[18px] h-16 w-16 text-cocoa-950 opacity-35" />
      <p className="mb-[22px] text-ink-soft">
        Your cart is empty. A fresh batch is just a click away.
      </p>
      <Button href="/#shop" variant="primary">
        Shop chin chin
      </Button>
    </div>
  );
}
