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
        9.134375,0 8,0 C6.865625,0 5.865625,0.584375 5.290625,1.459375 C4.2625,1.246875 3.14375,1.54375
        2.34375,2.34375 C1.540625,3.14375 1.246875,4.265625 1.459375,5.290625 C0.58125,5.86875 0,6.86875
        0,8 C0,9.134375 0.584375,10.134375 1.459375,10.709375 C1.246875,11.7375 1.54375,12.85625 2.34375,
        13.65625 C3.14375,14.459375 4.25625,14.753125 5.290625,14.540625 C5.86875,15.41875 6.86875,16
        8,16 C9.1375,16 10.134375,15.4125 10.709375,14.540625 C11.74375,14.753125 12.85625,14.45625
        13.65625,13.65625 C14.459375,12.85625 14.753125,11.734375 14.540625,10.709375 C15.41875,10.13125
        16,9.13125 16,8 Z M12.615625,9.915625 C12.9,10.5375 13.5625,11.628125 12.59375,12.596875 C11.71875,
        13.471875 10.865625,13.05 9.9125,12.61875 C9.671875,13.2625 9.371875,14.5 8,14.5 C6.584375,14.5
        6.290625,13.1625 6.0875,12.61875 C5.428125,12.91875 4.371875,13.5625 3.403125,12.59375 C2.403125,
        11.59375 3.140625,10.440625 3.38125,9.9125 C2.7375,9.671875 1.5,9.371875 1.5,8 C1.5,6.584375
        2.8375,6.290625 3.384375,6.084375 C3.1,5.4625 2.4375,4.371875 3.40625,3.403125 C4.40625,2.403125
        5.559375,3.140625 6.0875,3.38125 C6.328125,2.7375 6.628125,1.5 8,1.5 C9.415625,1.5 9.709375,2.8375
        9.9125,3.3875 C10.534375,3.103125 11.625,2.440625 12.59375,3.409375 C13.59375,4.409375 12.85625,5.5625
        12.615625,6.090625 C13.259375,6.33125 14.496875,6.63125 14.496875,8.003125 C14.496875,9.41875 13.159375,
        9.7125 12.615625,9.915625 Z M10.4617807,6.51501762 C10.4617807,8.11204647 8.73687427,8.13662641
        8.73687427,8.72680683 L8.73687427,8.87774001 C8.73687427,9.03558035 8.60890141,9.16355321 8.45106107,
        9.16355321 L7.36385151,9.16355321 C7.20601117,9.16355321 7.07803831,9.03558035 7.07803831,8.87774001
        L7.07803831,8.67150198 C7.07803831,7.82013593 7.72349977,7.47980387 8.2112638,7.20632828 C8.62952759,
        6.97184238 8.88587821,6.81235861 8.88587821,6.50182258 C8.88587821,6.09106139 8.36191117,5.81841942
        7.93831221,5.81841942 C7.38600203,5.81841942 7.13103284,6.07986704 6.7726231,6.53221405 C6.67599442,
        6.65416101 6.4996715,6.67681171 6.37567621,6.58280299 L5.71297069,6.08029576 C5.59133336,5.98807337
        5.56408583,5.81672836 5.64999652,5.69056565 C6.21273887,4.86423208 6.92951073,4.4 8.04546834,4.4
        C9.21422993,4.4 10.4617807,5.31231571 10.4617807,6.51501762 Z M8.90069235,10.5003462 C8.90069235,
        11.0519418 8.45194182,11.5006923 7.90034617,11.5006923 C7.34875053,11.5006923 6.9,11.0519418 6.9,
        10.5003462 C6.9,9.94875053 7.34875053,9.5 7.90034617,9.5 C8.45194182,9.5 8.90069235,9.94875053
        8.90069235,10.5003462 Z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

export default Icon;
