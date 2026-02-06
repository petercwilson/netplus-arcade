import type { SVGProps } from 'react';
export const FlashcardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="2" y="4" width="16" height="16" />
    <path d="M6 8h8" />
    <path d="M6 12h8" />
    <path d="M20 6h-2" />
    <path d="M20 10h-2" />
    <path d="M20 14h-2" />
  </svg>
);
