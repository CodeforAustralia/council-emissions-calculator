import "../styles/globals.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/700.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FormProvider } from "../components/FormProvider";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "630px",
  lg: "1400px",
});

const headingStyle = {
  baseStyle: {
    fontWeight: 700,
    as: "h1",
    mt: ["24px", "97px"],
    textAlign: "center",
  },
  sizes: {
    xl: {
      fontSize: [26, 36],
    },
  },
};

const theme = extendTheme({
  fonts: {
    heading: "Public Sans",
    body: "Public Sans",
  },
  breakpoints,
  components: {
    Heading: headingStyle,
  },
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
