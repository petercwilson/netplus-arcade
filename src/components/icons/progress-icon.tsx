import type { SVGProps } from 'react';
export const ProgressIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 20h16" />
    <path d="M4 16h12" />
    <path d="M4 12h8" />
    <path d="M4 8h4" />
    <path d="M18 4l4 4-4 4" />
    <path d="M22 8H10" />
  </svg>
);
