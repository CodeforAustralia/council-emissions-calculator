// import {extendTheme} from "@chakra-ui/react"

const resultsTopHeaderStyle = {
  baseStyle: { fontWeight: 400, letterSpacing: "-0.02em" },

  variants: {
    lg: {
      fontSize: "50px",
      lineHeight: "59px",
    },
    md: {
      fontSize: "30px",
    },
    sm: {},
  },
  defaultProps: {
    variant: "lg",
  },
};

const resultsHeading2Style = {
  baseStyle: {
    fontSize: "33.18px",
    fontWeight: 600,
    lineHeight: "768px",
    letterSpacing: "0.0125em",
  },
};
const resultsHeading3Style = {
  baseStyle: {
    fontSize: "27.65px",
    fontWeight: 600,
    lineHeight: "54px",
    letterSpacing: "0.0125em",
  },
};

export { resultsTopHeaderStyle, resultsHeading2Style, resultsHeading3Style };
