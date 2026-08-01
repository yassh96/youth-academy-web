import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light  = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          style={{
            color:      "var(--color-gold)",
            fontFamily: "var(--font-outfit)",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-gray-400" : "text-gray-500"}`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
