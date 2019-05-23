const berry = '#9951DD';
const black = '#000';
const brick = '#C24342';
const grass = '#4CAB2C';
const lemon = '#FDC504';
const navy = '#26374E';
const sky = '#4B81D2';
const tangerine = '#EF760B';
const white = '#fff';

const greyscale = [
  '#E9E9E9',
  '#C9C9C9',
  '#959595',
  '#666666',
  '#383838',
  '#151515',
];

const tonal = [
  '#F3F5F6',
  '#E8EBEE',
  '#D6D9DE',
  '#989EA6',
  '#6B7480',
  '#3F4A5A',
  '#1F2834',
];

export default {
  name: 'newton',

  breakpoint: {
    mobile: '530px',
    tablet: '700px',
    widescreen: '1200px',
  },
  button: {
    default: {
      background: {
        color: brick,
      },
      color: white,
      focus: {
        color: lemon,
      },
      hover: {
        color: brick,
      },
    },
  },
  colour: {
    brand: {
      brand01: navy,
      brand02: lemon,
      brand03: brick,
    },
    select: {
      berry,
      black,
      brick,
      grass,
      lemon,
      navy,
      sky,
      tangerine,
      white,
    },
    state: {
      danger: brick,
      success: grass,
      warning: lemon,
    },
  },
  flashMessage: {
    background: {
      color: navy,
    },
    color: white,
  },
  font: {
    family: {
      mono: '"Menlo", monospace',
      sans: '"gill-sans-nova", "Gill Sans", sans-serif',
      serif: '"Times Newer Roman", "Times New Roman", serif',
    },
  },
  input: {
    background: {
      color: white,
    },
    outline: {
      color: lemon,
    },
  },
  link: {
    focus: {
      outline: {
        color: lemon,
      },
    },
    hover: {
      color: greyscale[2],
      decoration: 'none',
    },
    standard: {
      color: greyscale[2],
      decoration: 'underline',
    },
  },
  padding: {
    lg: '2rem',
    md: '1rem',
    sm: '.5rem',
  },
  text: {
    color: greyscale[5],
  },
};
