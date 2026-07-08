import Link from "next/link";

const VARIANT_CLASSES = {
  primary: "border-transparent bg-gold-500 text-cocoa-950 hover:bg-gold-400",
  ghost:
    "border-cocoa-950 bg-transparent text-cocoa-950 hover:bg-cocoa-950 hover:text-cream-100",
  dark: "border-transparent bg-cocoa-950 text-cream-100 hover:bg-cocoa-800",
};

const SIZE_CLASSES = {
  md: "px-[26px] py-[14px] text-[0.98rem]",
  sm: "px-[18px] py-[10px] text-[0.87rem]",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-md border-2 font-semibold transition-transform duration-150 ease-out hover:-translate-y-px disabled:opacity-45 disabled:pointer-events-none disabled:hover:translate-y-0";

export default function Button({
  href,
  variant = "primary",
  size = "md",
  block = false,
  type = "button",
  className = "",
  children,
  ...props
}) {
  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    block ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
