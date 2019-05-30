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
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <path
        d="M8,0 C3.58170968,0 0,3.58170968 0,8 C0,12.4182903 3.58170968,16 8,16 C12.4182903,16 16,12.4182903
          16,8 C16,3.58170968 12.4182903,0 8,0 Z M8,1.5483871 C11.5655484,1.5483871 14.4516129,4.43390323
          14.4516129,8 C14.4516129,11.5655484 11.5660968,14.4516129 8,14.4516129 C4.43445161,14.4516129
          1.5483871,11.5660968 1.5483871,8 C1.5483871,4.43445161 4.43390323,1.5483871 8,1.5483871 Z
          M12.5227097,5.75054839 L11.7957419,5.01770968 C11.6451935,4.86593548 11.4000968,4.86493548
          11.2483226,5.01551613 L6.68858065,9.5386129 L4.75980645,7.59419355 C4.60925806,7.44241935
          4.36416129,7.44141935 4.2123871,7.59196774 L3.47951613,8.31893548 C3.32774194,8.46948387
          3.32674194,8.71458065 3.47732258,8.8663871 L6.40574194,11.8185161 C6.55629032,11.9702903
          6.8013871,11.9712903 6.95316129,11.8207097 L12.5205484,6.298 C12.6722903,6.14741935
          12.6732581,5.90232258 12.5227097,5.75054839 Z"
        fill="currentColor"
        fill-rule="nonzero"
      />
    </g>
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Icon;
