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
      d="M8,0 C3.58203226,0 0,3.58332258 0,8 C0,12.4192581 3.58203226,16 8,16 C12.4179677,16
        16,12.4192581 16,8 C16,3.58332258 12.4179677,0 8,0 Z M8,14.4516129 C4.43445161,14.4516129
        1.5483871,11.5667419 1.5483871,8 C1.5483871,4.43564516 4.43458065,1.5483871 8,1.5483871
        C11.5642258,1.5483871 14.4516129,4.43454839 14.4516129,8 C14.4516129,11.5654839 11.5667419,
        14.4516129 8,14.4516129 Z M9.35483871,11.0967742 C9.35483871,11.8438387 8.74706452,12.4516129
        8,12.4516129 C7.25293548,12.4516129 6.64516129,11.8438387 6.64516129,11.0967742 C6.64516129,
        10.3497097 7.25293548,9.74193548 8,9.74193548 C8.74706452,9.74193548 9.35483871,10.3497097
        9.35483871,11.0967742 Z M6.73,4.2773871 L6.94935484,8.66448387 C6.95964516,8.87051613 7.12970968,
        9.03225806 7.33596774,9.03225806 L8.66403226,9.03225806 C8.87029032,9.03225806 9.04035484,8.87051613
        9.05064516,8.66448387 L9.27,4.2773871 C9.28106452,4.05629032 9.10477419,3.87096774 8.8833871,3.87096774
        L7.1166129,3.87096774 C6.89522581,3.87096774 6.71893548,4.05629032 6.73,4.2773871 Z"
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
