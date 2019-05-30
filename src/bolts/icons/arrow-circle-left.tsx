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
      d="M16,8 C16,12.4193548 12.4193548,16 8,16 C3.58064516,16 -7.10542736e-15,12.4193548
        -7.10542736e-15,8 C-7.10542736e-15,3.58064516 3.58064516,2.70607438e-16
        8,9.86076132e-32 C12.4193548,-2.70607438e-16 16,3.58064516 16,8 Z
        M1.5483871,8 C1.5483871,11.5645161 4.43548387,14.4516129 8,14.4516129
        C11.5645161,14.4516129 14.4516129,11.5645161 14.4516129,8 C14.4516129,4.43548387
        11.5645161,1.5483871 8,1.5483871 C4.43548387,1.5483871 1.5483871,4.43548387
        1.5483871,8 Z M7.6483871,12.1903226 L3.73225806,8.27419355 C3.58064516,8.12258065
        3.58064516,7.87741935 3.73225806,7.72580645 L7.6483871,3.80967742 C7.8,3.65806452
        8.04516129,3.65806452 8.19677419,3.80967742 L8.82903226,4.44193548 C8.98387097,
        4.59677419 8.98064516,4.84516129 8.82258065,4.99677419 L6.55483871,7.16129032
        L11.7419355,7.16129032 C11.9548387,7.16129032 12.1290323,7.33548387 12.1290323,
        7.5483871 L12.1290323,8.4516129 C12.1290323,8.66451613 11.9548387,8.83870968
        11.7419355,8.83870968 L6.55483871,8.83870968 L8.82258065,11.0032258 C8.98064516,
        11.1548387 8.98387097,11.4032258 8.82903226,11.5580645 L8.19677419,12.1903226
        C8.04516129,12.3419355 7.8,12.3419355 7.6483871,12.1903226 Z"
      fill="#383838"
      fillRule="nonzero"
    />
  </svg>
);

export default Icon;
