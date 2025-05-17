import { josefinSansFont } from "@/utils/fonts";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/utils/theme";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={josefinSansFont.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default App;