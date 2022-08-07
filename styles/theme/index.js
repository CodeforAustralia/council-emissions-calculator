import { extendTheme } from "@chakra-ui/react";

import breakpoints from "./breakPoints";
import components from "./components/index";
import fonts from "./fonts";

const theme = extendTheme({
  breakpoints,
  components,
  fonts,
});

export default theme;
