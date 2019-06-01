import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    breakpoint: {
      mobile: string,
      tablet: string,
      widescreen: string,
    };
    button: {
      danger: {
        background: { color: string },
        color: string,
        focus: { color: string },
        hover: { color: string },
      },
      primary: {
        background: { color: string },
        color: string,
        focus: { color: string },
        hover: { color: string },
      },
      secondary: {
        background: { color: string },
        color: string,
        focus: { color: string },
        hover: { color: string },
      },
      success: {
        background: { color: string },
        color: string,
        focus: { color: string },
        hover: { color: string },
      },
      warning: {
        background: { color: string },
        color: string,
        focus: { color: string },
        hover: { color: string },
      },
    };
    card: {
      background: {
        color: string,
      },
      hover: {
        color: string,
      },
      shadow: {
        color: string,
      },
    };
    color: {
      brand: {
        brand01: string,
        brand02: string,
        brand03: string,
      },
      select: {
        berry: string,
        black: string,
        brick: string,
        grass: string,
        greyscale: string[],
        lemon: string,
        navy: string,
        sky: string,
        tangerine: string,
        tonal: string[],
        transparent: {
          black: string[],
          white: string[],
        },
        white: string,
      },
      state: {
        danger: string,
        success: string,
        warning: string,
      },
    };
    font: {
      family: {
        mono: string,
        sans: string,
        serif: string,
      },
    };
    input: {
      background: {
        color: string,
      },
      border: {
        color: string,
      },
      outline: {
        color: string,
      },
    };
    link: {
      focus: {
        color: string,
      },
      hover: {
        color: string,
        decoration: string,
      },
      standard: {
        color: string,
        decoration: string,
      },
    };
    padding: {
      lg: string,
      md: string,
      sm: string,
    };
    text: {
      color: string,
    };
  }
}
