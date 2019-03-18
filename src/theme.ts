const blue = '#4b81d2';
const green = '#69c44a';
const ink = '#17212F';
const maroon = '#942623';
const navy = '#26374e';
const purple = '#9951dd';
const red = '#c24342';
const white = '#fff';
const yellow = '#fdc507';

export default {
  name: 'newton',

  breakpoints: {
    mobile: '530px',
    tablet: '700px',
    widescreen: '1200px',
  },
  button: {
    default: {
      backgroundColour: red,
      borderColour: maroon,
      hoverColour: maroon,
      textColour: white,
    },
  },
  colours: {
    brand: {
      brand01: navy,
      brand02: yellow,
      brand03: red,
    },
    select: {
      blue,
      green,
      ink,
      navy,
      purple,
      red,
      white,
      yellow,
    },
    state: {
      danger: red,
      success: green,
      warning: yellow,
    },
  },
  inputs: {
    backgroundColour: white,
    outlineColour: yellow,
  },
  padding: {
    large: '2.5rem',
  },
};
