type CornerAccentProps = {
  tone?: "light" | "dark" | "gold";
  className?: string;
};

const strokeByTone = {
  light: "rgba(26,26,26,0.08)",
  dark: "rgba(255,255,255,0.14)",
  gold: "rgba(198,166,100,0.28)",
};

export default function CornerAccent({
  tone = "light",
  className = "",
}: CornerAccentProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 80"
      className={className}
      fill="none"
    >
      <path
        d="M8 18C22 8 38 6 54 10C68 14 82 24 96 25C104 26 111 24 118 20"
        stroke={strokeByTone[tone]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 38C22 28 38 26 54 30C68 34 82 44 96 45C104 46 111 44 118 40"
        stroke={strokeByTone[tone]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 58C22 48 38 46 54 50C68 54 82 64 96 65C104 66 111 64 118 60"
        stroke={strokeByTone[tone]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
