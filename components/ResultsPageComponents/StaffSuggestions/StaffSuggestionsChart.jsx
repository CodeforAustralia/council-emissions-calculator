import { Box, Flex, Text } from "@chakra-ui/react";

export default function StaffSuggestionsChart() {
  const bubbles = [
    {
      key: 1,
      bubbleTop: "50px",
      bubbleLeft: "465px",
      bubbleBackgroundColour: "#D69e2e",
      bubbleDiameter: "300px",
      bubbleTextColour: "#FFFFFF",
      textMarginLeft: "15%",
      textFontSize: "25px",
      textString: "End of trip facilities",
      valueMarginLeft: "25%",
      valueFontSize: "60px",
      valueString: "22%",
    },
    {
      key: 2,
      bubbleTop: "250px",
      bubbleLeft: "380px",
      bubbleBackgroundColour: "#E6EEF3",
      bubbleDiameter: "109px",
      bubbleTextColour: "#044B7F",
      textMarginLeft: "15%",
      textFontSize: "12px",
      textString: "Incentives behavioural change",
      valueMarginLeft: "25%",
      valueFontSize: "24px",
      valueString: "8%",
    },
    {
      key: 3,
      bubbleTop: "340px",
      bubbleLeft: "425px",
      bubbleBackgroundColour: "#044B7F",
      bubbleDiameter: "204px",
      bubbleTextColour: "#FFFFFF",
      textMarginLeft: "15%",
      textFontSize: "21px",
      textString: "Increase public transit",
      valueMarginLeft: "25%",
      valueFontSize: "48px",
      valueString: "15%",
    },
    {
      key: 4,
      bubbleTop: "50px",
      bubbleLeft: "740px",
      bubbleBackgroundColour: "#CDDBE5",
      bubbleDiameter: "95px",
      bubbleTextColour: "#044B7F",
      textMarginLeft: "15%",
      textFontSize: "12px",
      textString: "Access to fleet cars carpooling",
      valueMarginLeft: "25%",
      valueFontSize: "20px",
      valueString: "7%",
    },
    {
      key: 5,
      bubbleTop: "150px",
      bubbleLeft: "770px",
      bubbleBackgroundColour: "#366F99",
      bubbleDiameter: "95px",
      bubbleTextColour: "#FFFFFF",
      textMarginLeft: "15%",
      textFontSize: "12px",
      textString: "Improving bike/walk infrastructure",
      valueMarginLeft: "25%",
      valueFontSize: "18px",
      valueString: "12%",
    },
    {
      key: 6,
      bubbleTop: "250px",
      bubbleLeft: "770px",
      bubbleBackgroundColour: "#9BB7CC",
      bubbleDiameter: "109px",
      bubbleTextColour: "#FFFFFF",
      textMarginLeft: "15%",
      textFontSize: "12px",
      textString: "Arrangements for family members",
      valueMarginLeft: "25%",
      valueFontSize: "18px",
      valueString: "8%",
    },
    {
      key: 7,
      bubbleTop: "330px",
      bubbleLeft: "640px",
      bubbleBackgroundColour: "#022640",
      bubbleDiameter: "177px",
      bubbleTextColour: "#FFFFFF",
      textMarginLeft: "15%",
      textFontSize: "24px",
      textString: "Other",
      valueMarginLeft: "25%",
      valueFontSize: "48px",
      valueString: "13%",
    },
  ];

  const quotes = [
    {
      key: 1,
      radiusSE: true,
      quoteTop: "10px",
      quoteLeft: "205px",
      quote:
        "Better end of trip facilities.  A locker that I can store suit and shirts, and a damp towel to dry in.",
    },
    {
      key: 2,
      radiusSE: true,
      quoteTop: "195px",
      quoteLeft: "105px",
      quote:
        "Incentivize car pooling - complete a stat dec and get a discount on your rates.",
    },
    {
      key: 3,
      radiusNE: true,
      quoteTop: "520px",
      quoteLeft: "160px",
      quote: "More direct public transport options to the workplace.",
    },
    {
      key: 4,
      radiusSW: true,
      quoteTop: "10px",
      quoteLeft: "830px",
      quote: "I am 20 mins from the station so car pool could work well.",
    },
    {
      key: 5,
      radiusSW: true,
      quoteTop: "105px",
      quoteLeft: "855px",
      quote: "Provide dedicated bike lanes on arterial roads.",
    },
    {
      key: 6,
      radiusSW: true,
      quoteTop: "200px",
      quoteLeft: "875px",
      quote:
        "I have 2 toddlers in tow that need to be dropped off at childcare I can't think of any option other than driving.",
    },
    {
      key: "7a",
      radiusNW: true,
      quoteTop: "430px",
      quoteLeft: "818px",
      quote:
        "Flexibility to work from home for three days,  maybe one week a month.",
    },
    {
      key: "7b",
      radiusNW: true,
      quoteTop: "510px",
      quoteLeft: "740px",
      quote: "Move to electric powered vehicles.",
    },
  ];

  function QuoteBox(props) {
    const {
      radiusNW,
      radiusNE,
      radiusSE,
      radiusSW,
      quoteTop,
      quoteLeft,
      quote,
    } = props;
    const cornerCurve = "30px";
    return (
      <Box
        position="absolute"
        top={quoteTop}
        left={quoteLeft}
        borderRadius={`${radiusNW ? "0px" : cornerCurve} 
            ${radiusNE ? "0px" : cornerCurve} 
            ${radiusSE ? "0px" : cornerCurve} 
            ${radiusSW ? "0px" : cornerCurve}`}
        width="300px"
        border="2px dashed #044B7F"
        px="10px"
        py="10px"
        fontSize="13px"
      >
        &quot;{quote}&quot;
      </Box>
    );
  }

  function BubbleText(props) {
    const { marginLeft, fontSize, text } = props;
    return (
      <Text ml={marginLeft} fontSize={fontSize}>
        {text}
      </Text>
    );
  }

  function Bubble(props) {
    const {
      bubbleTop,
      bubbleLeft,
      bubbleBackgroundColour,
      bubbleDiameter,
      bubbleTextColour,
      textMarginLeft,
      textFontSize,
      textString,
      valueMarginLeft,
      valueFontSize,
      valueString,
    } = props;
    return (
      <Box position="absolute" top={bubbleTop} left={bubbleLeft}>
        <Flex
          justifyContent="center"
          direction="column"
          bg={bubbleBackgroundColour}
          w={bubbleDiameter}
          h={bubbleDiameter}
          borderRadius="50%"
          color={bubbleTextColour}
        >
          <BubbleText
            marginLeft={textMarginLeft}
            fontSize={textFontSize}
            text={textString}
          />
          <BubbleText
            marginLeft={valueMarginLeft}
            fontSize={valueFontSize}
            text={valueString}
          />
        </Flex>
      </Box>
    );
  }

  return (
    <Box position="relative" width="1200px" height="600px">
      {bubbles.map((bubble) => {
        return <Bubble key={bubble.key} {...bubble} />;
      })}
      {quotes.map((quote) => {
        return <QuoteBox key={quote.key} {...quote} />;
      })}
    </Box>
  );
}
