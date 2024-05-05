import CreditSlider from "./components/CreditSlider";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#9747FF",
      },
      secondary: {
        main: "#25AE9D",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      h1: {
        // heading with semi bold
        fontSize: "24px",
        fontWeight: 600,
      },
      body1: {
        // regular
        fontSize: "16px",
        fontWeight: 400,
      },
      body2: {
        // semi-bold
        fontSize: "16px",
        fontWeight: 600,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CreditSlider />
    </ThemeProvider>
  );
}

export default App;
