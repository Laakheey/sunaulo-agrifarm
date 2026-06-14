import type { SVGProps } from "react";

/** The Sunaulo Agrifarm brand mark: a seedling rising from a ridge. */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="24" cy="14" r="6" />
      <path d="M24 20c-9 0-15 7-17 16h34c-2-9-8-16-17-16Z" />
      <path d="M24 28v8" />
    </svg>
  );
}
