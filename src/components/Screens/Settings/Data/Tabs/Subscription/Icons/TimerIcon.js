import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.9vw"
      height="6.58vh"
      fill="none"
      viewBox="0 0 40 40"
    >
      <rect
        width="40"
        height="40"
        fill="#FC7676"
        fillOpacity="0.1"
        rx="20"
      ></rect>
      <circle cx="20" cy="20" r="9" stroke="#FC7676" strokeWidth="2"></circle>
      <path
        stroke="#FC7676"
        strokeLinecap="round"
        strokeWidth="2"
        d="M24.5 20h-4.25a.25.25 0 01-.25-.25V16.5"
      ></path>
    </svg>
  );
}

export default Icon;
