import React from "react";

function CreatePasswordIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      fill="none"
      viewBox="0 0 52 52"
    >
      <g filter="url(#filter0_dd_302_22251)">
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
          d="M18.5 18.25v13.5a.75.75 0 11-1.5 0v-13.5a.75.75 0 111.5 0zm7.875 5.11l-1.875.609V22a.75.75 0 10-1.5 0v1.969l-1.875-.61a.75.75 0 10-.469 1.427l1.875.609-1.157 1.593a.75.75 0 101.213.882l1.157-1.594 1.157 1.594a.75.75 0 101.213-.882l-1.157-1.593 1.875-.609a.75.75 0 00-.457-1.427zm9.938.481a.75.75 0 00-.938-.482l-1.875.61V22a.75.75 0 10-1.5 0v1.969l-1.875-.609a.75.75 0 10-.464 1.427l1.875.609-1.157 1.593a.748.748 0 00.424 1.188.751.751 0 00.79-.306l1.156-1.594 1.157 1.594a.751.751 0 101.213-.882l-1.157-1.593 1.875-.609a.75.75 0 00.475-.946z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_dd_302_22251"
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
            result="effect1_dropShadow_302_22251"
          ></feMorphology>
          <feOffset></feOffset>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0368 0 0 0 0 0.0984 0 0 0 0 0.2832 0 0 0 0.13 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_302_22251"
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
            in2="effect1_dropShadow_302_22251"
            result="effect2_dropShadow_302_22251"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_302_22251"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default CreatePasswordIcon;
