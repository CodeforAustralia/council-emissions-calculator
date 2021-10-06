import "../styles/globals.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/700.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FormProvider } from "../components/FormProvider";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "630px",
  lg: "1400px",
})

const theme = extendTheme({
  fonts: {
    heading: "Public Sans",
    body: "Public Sans",
  },
  breakpoints,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </ChakraProvider>
  );
}

export default MyApp;
