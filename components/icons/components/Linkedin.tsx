import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill={props.color}
      d="M17.833 2H6.167A4.167 4.167 0 0 0 2 6.167v11.666C2 20.134 3.866 22 6.167 22h11.666A4.167 4.167 0 0 0 22 17.833V6.167C22 3.866 20.135 2 17.833 2M8.667 17.833h-2.5V8.667h2.5zM7.417 7.61a1.465 1.465 0 0 1-1.459-1.47c0-.812.654-1.47 1.459-1.47s1.458.658 1.458 1.47-.652 1.47-1.458 1.47m11.25 10.223h-2.5v-4.67c0-2.806-3.334-2.594-3.334 0v4.67h-2.5V8.667h2.5v1.47c1.164-2.155 5.834-2.314 5.834 2.064z"
    />
  </svg>
);
export default SvgLinkedin;
