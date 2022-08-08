import "../styles/globals.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/700.css";
import { ChakraProvider } from "@chakra-ui/react";
import { FormProvider } from "../components/FormProvider";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  console.log("theme: ", theme);
  return (
    <ChakraProvider theme={theme}>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </ChakraProvider>
  );
}

export default MyApp;
