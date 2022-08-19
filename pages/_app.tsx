import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { lightTheme } from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ParticlesBackground } from "../components/ui";
import { UiProvider, AuthProvider } from "../context";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <AuthProvider>
          <UiProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <ParticlesBackground />
              <Component {...pageProps} />
            </ThemeProvider>
          </UiProvider>
        </AuthProvider>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
