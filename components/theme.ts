import {createTheme, experimental_extendTheme} from "@mui/material";

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1681,
  k1: 1920
};

export const theme = experimental_extendTheme({
colorSchemes: {
  light: {
    palette: {
      primary: {
        main: "#F4BF0F",
      },
    }
  }
},
  breakpoints: {
    values: breakpoints,
  },
});
