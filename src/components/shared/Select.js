const FIELD_CLASSES =
  "w-full rounded-[10px] border-[1.5px] border-line bg-white px-3.5 py-3 font-body text-[0.95rem] text-ink focus:border-gold-500 focus:outline-none";

export default function Select({
  id,
  label,
  error,
  className = "",
  wrapperClassName = "",
  children,
  ...props
}) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={wrapperClassName}>
      {label ? (
        <label htmlFor={id} className="mb-1.5 block text-[0.83rem] font-semibold text-cocoa-950">
          {label}
        </label>
      ) : null}
      <select
        id={id}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={errorId}
        className={[FIELD_CLASSES, error ? "border-terracotta-600" : "", className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </select>
      {error ? (
        <p id={errorId} className="mt-[5px] text-[0.78rem] text-terracotta-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
