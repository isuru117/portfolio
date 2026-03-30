import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64ffda",
      light: "#9effeb",
      dark: "#14cba8",
    },
    secondary: {
      main: "#ccd6f6",
    },
    background: {
      default: "#0a192f",
      paper: "#112240",
    },
    text: {
      primary: "#ccd6f6",
      secondary: "#8892b0",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', -apple-system, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.8,
      color: "#8892b0",
    },
    body2: {
      lineHeight: 1.7,
      color: "#8892b0",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
});

export default theme;
