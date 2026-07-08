const NUGGET_COLORS = ["#D68A2D", "#E2A24F", "#F0B856"];

// Fixed (non-random) scatter so server- and client-rendered markup match exactly.
const NUGGETS = [
  { x: 96, y: 158, r: 12 },
  { x: 168, y: 172, r: -22 },
  { x: 232, y: 155, r: 18 },
  { x: 292, y: 168, r: -8 },
  { x: 118, y: 196, r: -30 },
  { x: 190, y: 208, r: 24 },
  { x: 256, y: 198, r: -14 },
  { x: 312, y: 205, r: 30 },
  { x: 104, y: 228, r: 6 },
  { x: 176, y: 234, r: -20 },
  { x: 244, y: 226, r: 14 },
  { x: 300, y: 232, r: -26 },
  { x: 140, y: 152, r: -4 },
  { x: 268, y: 236, r: 20 },
];

export default function BowlIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 420 340" fill="none" className={className} aria-hidden="true">
      <ellipse cx="210" cy="300" rx="190" ry="26" fill="#241109" opacity="0.06" />
      <path d="M40 210 Q210 320 380 210 L360 250 Q210 300 60 250 Z" fill="#A8391C" />
      <path d="M40 210 Q210 260 380 210 L380 200 Q210 250 40 200 Z" fill="#8C2E15" />
      {NUGGETS.map((n, i) => (
        <rect
          key={i}
          x={n.x}
          y={n.y}
          width="34"
          height="13"
          rx="6.5"
          fill={NUGGET_COLORS[i % 3]}
          transform={`rotate(${n.r} ${n.x + 17} ${n.y + 6.5})`}
        />
      ))}
    </svg>
  );
}
