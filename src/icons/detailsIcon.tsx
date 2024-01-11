import React from "react";

function DetailsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      fill="none"
      viewBox="0 0 52 52"
    >
      <g filter="url(#filter0_dd_302_22233)">
        <rect
          width="48"
          height="48"
          x="2"
          y="1"
          fill="#fff"
          rx="12"
          shapeRendering="crispEdges"
        ></rect>
        <rect
          width="47"
          height="47"
          x="2.5"
          y="1.5"
          stroke="#ECEFF3"
          rx="11.5"
          shapeRendering="crispEdges"
        ></rect>
        <path
          fill="#0D0D12"
          d="M35.65 32.875c-1.428-2.468-3.628-4.238-6.196-5.077a6.75 6.75 0 10-6.905 0c-2.568.838-4.768 2.608-6.196 5.077a.752.752 0 00.264 1.042.75.75 0 001.034-.292c1.767-3.052 4.888-4.875 8.35-4.875 3.463 0 6.585 1.823 8.35 4.875a.75.75 0 101.3-.75zM20.752 22a5.25 5.25 0 1110.499 0 5.25 5.25 0 01-10.5 0z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_dd_302_22233"
          width="52"
          height="52"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="1"
            result="effect1_dropShadow_302_22233"
          ></feMorphology>
          <feOffset></feOffset>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0368 0 0 0 0 0.0984 0 0 0 0 0.2832 0 0 0 0.13 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_302_22233"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0696 0 0 0 0 0.215657 0 0 0 0 0.4104 0 0 0 0.08 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_302_22233"
            result="effect2_dropShadow_302_22233"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_302_22233"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default DetailsIcon;
