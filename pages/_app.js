import "../styles/globals.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/700.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FormProvider } from "../components/FormProvider";

const theme = extendTheme({
  fonts: {
    heading: "Public Sans",
    body: "Public Sans",
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
