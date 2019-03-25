const blue = '#4b81d2';
const green = '#69c44a';
const ink = '#17212F';
const maroon = '#942623';
const navy = '#26374e';
const purple = '#9951dd';
const red = '#c24342';
const white = '#fff';
const yellow = '#fdc507';

const grey = [
  '#eae8e8',
  '#bdbdbd',
  '#828282',
  '#575757',
  '#3a3a3a',
  '#262626',
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
        color: red,
      },
      border: {
        color: maroon,
      },
      color: white,
      focus: {
        color: yellow,
      },
      hover: {
        color: maroon,
      },
    },
  },
  colour: {
    brand: {
      brand01: navy,
      brand02: yellow,
      brand03: red,
    },
    select: {
      blue,
      green,
      grey,
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
      color: yellow,
    },
  },
  link: {
    focus: {
      outline: {
        color: yellow,
      },
    },
    hover: {
      color: grey[2],
      decoration: 'none',
    },
    standard: {
      color: grey[2],
      decoration: 'underline',
    },
  },
  padding: {
    large: '2.5rem',
  },
  text: {
    color: grey[5],
  },
};
