import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWhatsapp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill={props.color}
      d="M20 9.41A10.001 10.001 0 0 0 .74 6.333 10 10 0 0 0 1.33 15l-.89 3.31a1 1 0 0 0 .12.78.9.9 0 0 0 .34.34 1 1 0 0 0 .77.1l3.27-.9A10 10 0 0 0 10 20 10.15 10.15 0 0 0 20 9.41m-6 5.25c-1.14.66-2.25.42-3.88-.51a12.55 12.55 0 0 1-4.51-4.68c-1-1.93-.81-3.16.13-4a1.58 1.58 0 0 1 1-.48.89.89 0 0 1 .75.37l1.35 2q.048.152.07.31a.7.7 0 0 1-.11.37s-.5.59-.66.76a.24.24 0 0 0-.06.31 9.5 9.5 0 0 0 2.78 2.77.29.29 0 0 0 .34-.07q.353-.345.74-.65a.72.72 0 0 1 .67-.05l2 1.38q.15.15.28.32a1.68 1.68 0 0 1-.89 1.85"
    />
  </svg>
);
export default SvgWhatsapp;
