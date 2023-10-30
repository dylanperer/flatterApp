import * as React from 'react';
import { SVGProps } from 'react';
const SvgLockIcon = (props: SVGProps<SVGSVGElement>) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 20"
      {...props}>
      <path
         fill="#5E5E5E"
         d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-7.208a2.5 2.5 0 1 1 2 0V14H9v-3.208Z"
      />
   </svg>
);
export default SvgLockIcon;
