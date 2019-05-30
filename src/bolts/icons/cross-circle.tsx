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
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <path
        d="M11.2851961,10.5552795 L10.5552795,11.2851961 C10.4047341,11.4357414 10.1583873,11.4357414
          10.0078419,11.2851961 L8.00057108,9.27792527 L5.99330022,11.2851961 C5.8427549,11.4357414
          5.59640802,11.4357414 5.44586271,11.2851961 L4.71594603,10.5552795 C4.56540072,10.4047341
          4.56540072,10.1583873 4.71594603,10.0078419 L6.7232169,8.00057108 L4.71594603,5.99330022
          C4.56540072,5.8427549 4.56540072,5.59640802 4.71594603,5.44586271 L5.44586271,4.71594603
          C5.59640802,4.56540072 5.8427549,4.56540072 5.99330022,4.71594603 L8.00057108,6.7232169
          L10.0078419,4.71594603 C10.1583873,4.56540072 10.4047341,4.56540072 10.5552795,4.71594603
          L11.2851961,5.44586271 C11.4357414,5.59640802 11.4357414,5.8427549 11.2851961,5.99330022
          L9.27792527,8.00057108 L11.2851961,10.0078419 C11.4357414,10.1583873 11.4357414,10.4047341
          11.2851961,10.5552795 Z M13.6574253,13.6574253 C10.5324696,16.7823811 5.46867261,16.7823811
          2.34371683,13.6574253 C-0.781238944,10.5324696 -0.781238944,5.46867261 2.34371683,2.34371683
          C5.46867261,-0.781238944 10.5324696,-0.781238944 13.6574253,2.34371683 C16.7823811,5.46867261
          16.7823811,10.5324696 13.6574253,13.6574253 Z M12.5625503,12.5625503 C15.0830438,10.0420568
          15.0830438,5.95908537 12.5625503,3.43859185 C10.0420568,0.918098321 5.95908537,0.918098321
          3.43859185,3.43859185 C0.918098321,5.95908537 0.918098321,10.0420568 3.43859185,12.5625503
          C5.95908537,15.0830438 10.0420568,15.0830438 12.5625503,12.5625503 Z"
        fill="currentColor"
        fill-rule="nonzero"
      />
    </g>
  </svg>
);

export default Icon;
