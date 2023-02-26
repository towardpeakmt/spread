import * as React from "react";
const SvgPlusCircle = (props) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.576 9.262v3m0 0v3m0-3h3m-3 0h-3m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#5A6E87"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPlusCircle;
