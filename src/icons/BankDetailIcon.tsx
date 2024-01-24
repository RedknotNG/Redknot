import React from "react";

function BankDetailsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      fill="none"
      viewBox="0 0 52 52"
    >
      <g filter="url(#filter0_dd_302_22242)">
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
          fill="#818898"
          d="M16.25 22.75h2.25v6H17a.75.75 0 100 1.5h18a.75.75 0 100-1.5h-1.5v-6h2.25a.75.75 0 00.393-1.388l-9.75-6a.75.75 0 00-.786 0l-9.75 6a.75.75 0 00.393 1.388zm3.75 0h3v6h-3v-6zm7.5 0v6h-3v-6h3zm4.5 6h-3v-6h3v6zm-6-11.87l7.1 4.37H18.9l7.1-4.37zM37.25 32.5a.75.75 0 01-.75.75h-21a.75.75 0 110-1.5h21a.75.75 0 01.75.75z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_dd_302_22242"
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
            result="effect1_dropShadow_302_22242"
          ></feMorphology>
          <feOffset></feOffset>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0368 0 0 0 0 0.0984 0 0 0 0 0.2832 0 0 0 0.13 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_302_22242"
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
            in2="effect1_dropShadow_302_22242"
            result="effect2_dropShadow_302_22242"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_302_22242"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default BankDetailsIcon;
