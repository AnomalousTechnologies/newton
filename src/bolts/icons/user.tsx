import React from 'react';

interface Props {
  className?: string;
  title?: string;
  style?: object;
}

const Icon = ({ className, title, style }: Props) => (
  <svg
    aria-hidden="true"
    className={className}
    focusable="false"
    role="img"
    style={style}
    viewBox="0 0 14 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M9.8,9.5 C8.903125,9.5 8.471875,10 7,10 C5.528125,10 5.1,9.5 4.2,9.5 C1.88125,9.5 0,11.38125 0,13.7
          L0,14.5 C0,15.328125 0.671875,16 1.5,16 L12.5,16 C13.328125,16 14,15.328125 14,14.5 L14,13.7 C14,11.38125
          12.11875,9.5 9.8,9.5 Z M12.5,14.5 L1.5,14.5 L1.5,13.7 C1.5,12.2125 2.7125,11 4.2,11 C4.65625,11 5.396875,11.5
          7,11.5 C8.615625,11.5 9.340625,11 9.8,11 C11.2875,11 12.5,12.2125 12.5,13.7 L12.5,14.5 Z M7,9 C9.484375,9
          11.5,6.984375 11.5,4.5 C11.5,2.015625 9.484375,0 7,0 C4.515625,0 2.5,2.015625 2.5,4.5 C2.5,6.984375 4.515625,9
          7,9 Z M7,1.5 C8.653125,1.5 10,2.846875 10,4.5 C10,6.153125 8.653125,7.5 7,7.5 C5.346875,7.5 4,6.153125 4,4.5
          C4,2.846875 5.346875,1.5 7,1.5 Z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default Icon;
