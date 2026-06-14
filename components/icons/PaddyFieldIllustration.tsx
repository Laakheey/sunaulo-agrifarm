import type { SVGProps } from "react";

/** Decorative illustration of terraced paddy fields under an evening sky. */
export function PaddyFieldIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 480 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect width="480" height="600" fill="#1f3322" />
      <circle cx="370" cy="100" r="60" fill="#e3a23c" opacity="0.9" />
      <path d="M0 360 Q120 320 240 360 T480 360 V600 H0 Z" fill="#33502f" />
      <path d="M0 430 Q140 400 240 430 T480 430 V600 H0 Z" fill="#28401f" opacity="0.85" />
      <g stroke="#f3d6a0" strokeWidth="3" strokeLinecap="round" opacity="0.85">
        <path d="M70 470 V340 Q90 320 70 290" fill="none" />
        <path d="M140 480 V330 Q120 305 145 280" fill="none" />
        <path d="M210 470 V345 Q230 320 215 290" fill="none" />
        <path d="M300 485 V335 Q280 308 305 282" fill="none" />
        <path d="M370 475 V340 Q392 318 372 292" fill="none" />
      </g>
    </svg>
  );
}
