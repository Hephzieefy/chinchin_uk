export default function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={[
        "relative mb-4 inline-flex -rotate-[2.5deg] items-center rounded-[3px] border-[1.5px] border-terracotta-600 bg-cream-100 py-1.5 pl-5 pr-3",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 14 14"
        className="absolute left-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 overflow-visible"
      >
        <path
          d="M6 6 L-3 -4"
          stroke="#A8391C"
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="6" cy="6" r="2" fill="#FBF2E4" stroke="#A8391C" strokeWidth="1.1" />
      </svg>
      <span className="font-mono text-xs uppercase tracking-[0.08em] text-terracotta-600">
        {children}
      </span>
    </span>
  );
}
