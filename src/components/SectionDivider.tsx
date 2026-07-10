type SectionDividerProps = {
  tone?: "light" | "dark" | "gold";
  align?: "left" | "center";
};

const tones = {
  light: {
    line: "#D9CFBF",
    dot: "#C6A664",
  },
  dark: {
    line: "rgba(255,255,255,0.18)",
    dot: "#C6A664",
  },
  gold: {
    line: "rgba(198,166,100,0.38)",
    dot: "#A8893F",
  },
};

export default function SectionDivider({
  tone = "light",
  align = "left",
}: SectionDividerProps) {
  const palette = tones[tone];
  const justify = align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`mt-6 flex ${justify}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 160 16"
        className="h-4 w-40"
        fill="none"
      >
        <path
          d="M0 8H58"
          stroke={palette.line}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M102 8H160"
          stroke={palette.line}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="80" cy="8" r="3" fill={palette.dot} />
        <path
          d="M66 8H74M86 8H94"
          stroke={palette.line}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
