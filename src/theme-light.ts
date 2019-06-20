import { DefaultTheme as Theme } from 'styled-components';

const black = '#000';
const white = '#fff';
const navy = '#26374E';
const berry = '#9951DD';
const brick = '#C24342';
const brickDark = '#AD3837';
const grass = '#4CAB2C';
const grassDark = '#3E9122';
const lemon = '#FDC504';
const lemonDark = '#EBB702';
const sky = '#4B81D2';
const tangerine = '#EF760B';

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

const transparent = {
  black: [
    'rgba(0, 0, 0, .15)',
    'rgba(0, 0, 0, .2)',
    'rgba(0, 0, 0, .4)',
    'rgba(0, 0, 0, .6)',
    'rgba(0, 0, 0, .8)',
  ],
  white: [
    'rgba(255, 255, 255, .15)',
    'rgba(255, 255, 255, .2)',
    'rgba(255, 255, 255, .4)',
    'rgba(255, 255, 255, .6)',
    'rgba(255, 255, 255, .8)',
  ],
};

const theme: Theme = {
  name: 'newton-light',

  breakpoint: {
    mobile: '530px',
    tablet: '700px',
    widescreen: '1200px',
  },
  button: {
    danger: {
      background: { color: brick },
      color: white,
      focus: { color: sky },
      hover: { color: brickDark },
    },
    primary: {
      background: { color: greyscale[4] },
      color: white,
      focus: { color: sky },
      hover: { color: black },
    },
    secondary: {
      background: { color: white },
      color: greyscale[4],
      focus: { color: sky },
      hover: { color: greyscale[0] },
    },
    success: {
      background: { color: grass },
      color: white,
      focus: { color: sky },
      hover: { color: grassDark },
    },
    warning: {
      background: { color: lemon },
      color: greyscale[4],
      focus: { color: sky },
      hover: { color: lemonDark },
    },
  },
  card: {
    background: {
      color: white,
    },
    hover: {
      color: tonal[1],
    },
    shadow: {
      color: greyscale[1],
    },
  },
  color: {
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
      greyscale,
      lemon,
      navy,
      sky,
      tangerine,
      tonal,
      transparent,
      white,
    },
    state: {
      danger: brick,
      success: grass,
      warning: lemon,
    },
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
      color: sky,
    },
    shadow: {
      color: greyscale[1],
    },
  },
  link: {
    focus: {
      color: sky,
    },
    hover: {
      color: sky,
      decoration: 'none',
    },
    standard: {
      color: sky,
      decoration: 'underline',
    },
  },
  padding: {
    lg: '2rem',
    md: '1rem',
    sm: '.5rem',
  },
  text: {
    color: greyscale[4],
  },
};

export default theme;
