import type { SVGProps } from 'react';
export const TrophyIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 9H4v6h2" />
    <path d="M18 9h2v6h-2" />
    <path d="M12 6v3" />
    <path d="M6 15h12v3H6z" />
    <path d="M9 21h6" />
    <path d="M8 3h8v6H8z" />
  </svg>
);
