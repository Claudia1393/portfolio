export default function PulseLine() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <svg
        viewBox="0 0 260 40"
        className="h-8 w-auto sm:h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20 H40 L48 6 L58 34 L66 20 L74 26 L82 20 H120
             Q126 20 130 16 T140 20 H180
             L188 8 L196 32 L204 20 H260"
          stroke="#0E7C66"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1"
          className="animate-draw"
          style={{ strokeDashoffset: 1 }}
        />
      </svg>
      <span className="font-mono text-xl text-pulse animate-blink" style={{ animationDelay: '2.2s' }}>
        _
      </span>
    </div>
  )
}
