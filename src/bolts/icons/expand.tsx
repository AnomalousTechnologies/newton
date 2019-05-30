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
    d="M16,0.857142857 L16,4.25017857 C16,5.01382143 15.07675,5.39625 14.53675,4.85628571 L13.5473214,
      3.86685714 L9.71725,7.69696429 C9.54989286,7.86432143 9.27853571,7.86432143 9.11114286,7.69696429
      L8.30303571,6.88885714 C8.13567857,6.7215 8.13567857,6.45014286 8.30303571,6.28275 L12.1331429,
      2.45264286 L11.1437143,1.46321429 C10.60375,0.92325 10.9861786,0 11.7498214,0 L15.1428571,0
      C15.61625,0 16,0.38375 16,0.857142857 Z M6.28275,8.30303571 L2.45264286,12.1331429 L1.46321429,
      11.1437143 C0.92325,10.60375 0,10.9861786 0,11.7498214 L0,15.1428571 C0,15.61625 0.38375,16
      0.857142857,16 L4.25017857,16 C5.01382143,16 5.39625,15.07675 4.85628571,14.53675 L3.86685714,
      13.5473214 L7.69696429,9.71721429 C7.86432143,9.54985714 7.86432143,9.2785 7.69696429,9.11110714
      L6.88885714,8.303 C6.72146429,8.13567857 6.45010714,8.13567857 6.28275,8.30303571 Z"
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
