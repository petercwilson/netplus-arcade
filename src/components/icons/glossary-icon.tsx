import type { SVGProps } from 'react';
export const GlossaryIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path d="M4 8h16" />
    <path d="M8 4v4" />
    <path d="M12 12h4" />
    <path d="M12 16h4" />
    <path d="M8 12h.01" />
    <path d="M8 16h.01" />
  </svg>
);
