import React from 'react';

import PropTypes from 'prop-types';

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
      d="M8.5,1.53125 L8.5,3.14375 L5.5,3.14375 C4.671875,3.14375 4,3.815625 4,4.64375 L4,7.4125 C4,8.240625
        4.671875,8.9125 5.5,8.9125 L8.5,8.9125 L8.5,10.525 C8.5,11.85625 10.115625,12.53125 11.059375,11.584375
        L15.559375,7.0875 C16.14375,6.503125 16.14375,5.553125 15.559375,4.965625 L11.059375,0.465625 C10.11875,
        -0.46875 8.5,0.196875 8.5,1.53125 Z M14.5,6.03125 L10,10.53125 L10,7.415625 L5.5,7.415625 L5.5,4.646875
        L10,4.646875 L10,1.53125 L14.5,6.03125 Z M3,0.03125 L5.625,0.03125 C5.83125,0.03125 6,0.2 6,0.40625
        L6,1.15625 C6,1.3625 5.83125,1.53125 5.625,1.53125 L3,1.53125 C2.171875,1.53125 1.5,2.203125 1.5,3.03125
        L1.5,9.03125 C1.5,9.859375 2.171875,10.53125 3,10.53125 L5.625,10.53125 C5.83125,10.53125 6,10.7 6,10.90625
        L6,11.65625 C6,11.8625 5.83125,12.03125 5.625,12.03125 L3,12.03125 C1.34375,12.03125 4.52970994e-14,10.6875
        4.52970994e-14,9.03125 L4.52970994e-14,3.03125 C4.52970994e-14,1.375 1.34375,0.03125 3,0.03125 Z"
      fill="#383838"
      fillRule="nonzero"
    />
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Icon;
