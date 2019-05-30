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
        d="M9.29032258,1.29032258 C9.29032258,2.00293548 8.7126129,2.58064516 8,2.58064516 C7.2873871,2.58064516
          6.70967742,2.00293548 6.70967742,1.29032258 C6.70967742,0.577709677 7.2873871,0 8,0 C8.7126129,0
          9.29032258,0.577709677 9.29032258,1.29032258 Z M8,13.4193548 C7.2873871,13.4193548 6.70967742,13.9970645
          6.70967742,14.7096774 C6.70967742,15.4222903 7.2873871,16 8,16 C8.7126129,16 9.29032258,15.4222903
          9.29032258,14.7096774 C9.29032258,13.9970645 8.7126129,13.4193548 8,13.4193548 Z M16,8 C16,7.2873871
          15.4222903,6.70967742 14.7096774,6.70967742 C13.9970645,6.70967742 13.4193548,7.2873871 13.4193548,8
          C13.4193548,8.7126129 13.9970645,9.29032258 14.7096774,9.29032258 C15.4222903,9.29032258 16,8.7126129
          16,8 Z M2.58064516,8 C2.58064516,7.2873871 2.00293548,6.70967742 1.29032258,6.70967742 C0.577709677,
          6.70967742 0,7.2873871 0,8 C0,8.7126129 0.577709677,9.29032258 1.29032258,9.29032258 C2.00293548,
          9.29032258 2.58064516,8.7126129 2.58064516,8 Z M3.25554839,1.96522581 C2.54293548,1.96522581
          1.96522581,2.54293548 1.96522581,3.25554839 C1.96522581,3.96816129 2.54293548,4.54587097
          3.25554839,4.54587097 C3.96816129,4.54587097 4.54587097,3.96816129 4.54587097,3.25554839
          C4.54587097,2.54290323 3.96816129,1.96522581 3.25554839,1.96522581 Z M12.7444516,11.454129
          C12.0318387,11.454129 11.454129,12.0318387 11.454129,12.7444516 C11.454129,13.4570645
          12.0318387,14.0347742 12.7444516,14.0347742 C13.4570968,14.0347742 14.0347742,13.4570645
          14.0347742,12.7444516 C14.0347742,12.0318387 13.4570968,11.454129 12.7444516,11.454129 Z
          M3.25554839,11.454129 C2.54293548,11.454129 1.96522581,12.0318387 1.96522581,12.7444516
          C1.96522581,13.4570645 2.54293548,14.0347742 3.25554839,14.0347742 C3.96816129,14.0347742
          4.54587097,13.4570645 4.54587097,12.7444516 C4.54587097,12.0318387 3.96816129,11.454129
          3.25554839,11.454129 Z"
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
