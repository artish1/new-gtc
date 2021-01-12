import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    primary: {
      default: "#292827",
      dark: "#1E1E1D",
      light: "#B1AEAB",
    },
    accent: {
      default: "#EFE4D6",
      dark: "#E2D0BD",
    },
    lights: {
      offWhite: "#F8F2F0",
      white: "#ffffff",
    },
    cta: {
      default: "#A37351",
    },
  },
  fonts: {
    display: "font-family: 'Merriweather', serif;",
    text: "font-family: 'Montserrat', sans-serif;",
  },
};
export { mainTheme };
