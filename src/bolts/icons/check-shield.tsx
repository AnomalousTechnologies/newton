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
      d="M4.6,7.203125 C4.453125,7.05625 4.215625,7.05625 4.06875,7.2 L3.359375,7.903125 C3.2125,8.05
        3.2125,8.2875 3.35625,8.434375 L6.19375,11.29375 C6.340625,11.440625 6.578125,11.440625
        6.725,11.296875 L12.11875,5.946875 C12.265625,5.8 12.265625,5.5625 12.121875,5.415625
        L11.41875,4.70625 C11.271875,4.559375 11.034375,4.559375 10.8875,4.703125 L6.46875,9.084375
        L4.6,7.203125 Z M14.078125,2.615625 L8.078125,0.115625 C7.70900078,-0.0375026349 7.29412422,
        -0.0375026349 6.925,0.115625 L0.925,2.615625 C0.365625,2.846875 0,3.39375 0,4 C0,10.203125
        3.578125,14.490625 6.921875,15.884375 C7.290625,16.0375 7.70625,16.0375 8.075,15.884375
        C10.753125,14.76875 15,10.915625 15,4 C15,3.39375 14.634375,2.846875 14.078125,2.615625
        Z M7.5,14.5 C4.453125,13.23125 1.5,9.290625 1.5,4 L7.5,1.5 L13.5,4 C13.5,9.43125 10.425,13.28125 7.5,14.5 Z"
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
