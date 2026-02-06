import type { SVGProps } from 'react';
export const QuizIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 19h16" />
    <path d="M4 15h16" />
    <path d="M8 11h2" />
    <path d="M14 11h2" />
    <path d="M4 5h16v14H4z" />
    <path d="M4 5l6-4h4l6 4" />
  </svg>
);
