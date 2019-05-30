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
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M16,8 C16,6.859375 15.4125,5.8625 14.540625,5.290625 C14.753125,4.2625 14.45625,3.14375
        13.65625,2.34375 C12.85625,1.540625 11.734375,1.246875 10.709375,1.459375 C10.13125,0.584375
        9.134375,0 8,0 C6.865625,0 5.865625,0.584375 5.290625,1.459375 C4.2625,1.246875 3.14375,
        1.54375 2.34375,2.34375 C1.540625,3.14375 1.246875,4.265625 1.459375,5.290625 C0.58125,
        5.86875 0,6.86875 0,8 C0,9.134375 0.584375,10.134375 1.459375,10.709375 C1.246875,11.7375
        1.54375,12.85625 2.34375,13.65625 C3.14375,14.459375 4.25625,14.753125 5.290625,14.540625
        C5.86875,15.41875 6.86875,16 8,16 C9.1375,16 10.134375,15.4125 10.709375,14.540625 C11.74375,
        14.753125 12.85625,14.45625 13.65625,13.65625 C14.459375,12.85625 14.753125,11.734375 14.540625,
        10.709375 C15.41875,10.13125 16,9.13125 16,8 Z M12.615625,9.915625 C12.9,10.5375 13.5625,11.628125
        12.59375,12.596875 C11.71875,13.471875 10.865625,13.05 9.9125,12.61875 C9.671875,13.2625 9.371875,
        14.5 8,14.5 C6.584375,14.5 6.290625,13.1625 6.0875,12.61875 C5.428125,12.91875 4.371875,13.5625
        3.403125,12.59375 C2.403125,11.59375 3.140625,10.440625 3.38125,9.9125 C2.7375,9.671875 1.5,9.371875
        1.5,8 C1.5,6.584375 2.8375,6.290625 3.384375,6.084375 C3.1,5.4625 2.4375,4.371875 3.40625,3.403125
        C4.40625,2.403125 5.559375,3.140625 6.0875,3.38125 C6.328125,2.7375 6.628125,1.5 8,1.5 C9.415625,1.5
        9.709375,2.8375 9.9125,3.3875 C10.534375,3.103125 11.625,2.440625 12.59375,3.409375 C13.59375,4.409375
        12.85625,5.5625 12.615625,6.090625 C13.259375,6.33125 14.496875,6.63125 14.496875,8.003125 C14.496875,
        9.41875 13.159375,9.7125 12.615625,9.915625 Z M11.0881452,6.10923964 L9.19980418,7.99758065 L11.0881452,
        9.88592166 C11.2308333,10.0286098 11.2308333,10.2593396 11.0881452,10.4020277 L10.4020277,11.0881452
        C10.2593396,11.2308333 10.0286098,11.2308333 9.88592166,11.0881452 L7.99758065,9.19980418 L6.10923964,
        11.0881452 C5.9665515,11.2308333 5.73582173,11.2308333 5.59313358,11.0881452 L4.90701611,10.4020277
        C4.76432796,10.2593396 4.76432796,10.0286098 4.90701611,9.88592166 L6.79535712,7.99758065 L4.90701611,
        6.10923964 C4.76432796,5.9665515 4.76432796,5.73582173 4.90701611,5.59313358 L5.59313358,4.90701611
        C5.73582173,4.76432796 5.9665515,4.76432796 6.10923964,4.90701611 L7.99758065,6.79535712 L9.88592166,
        4.90701611 C10.0286098,4.76432796 10.2593396,4.76432796 10.4020277,4.90701611 L11.0881452,5.59313358
        C11.2308333,5.73582173 11.2308333,5.9665515 11.0881452,6.10923964 Z"
      fill="currentColor"
      fillRule="nonzero"
/>
  </svg>
);

export default Icon;