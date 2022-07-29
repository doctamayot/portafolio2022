import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { lightTheme } from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ParticlesBackground } from "../components/ui";
import { UiProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <ParticlesBackground />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
  );
}

export default MyApp;
