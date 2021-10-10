import Link from "next/link";
import { Box, Button, Text } from "@chakra-ui/react";
import BackArrow from "../../public/images/back-arrow.svg";

export default function LinkButton({ children, href, onClick, disabled, variant="solid", width, topMargin }) {
  return (
    <Link href={href} passHref>
      <Button
        mt={topMargin || 12}
        w={width || "200px"}
        mt={12}
        p={7}
        color="#fff"
        bg="#044B7F"
        variant={variant}
        _hover={{
          bg:"var(--chakra-colors-blue-500)"
        }}
        _disabled={{
          bg:"#D0D9DF",
          _hover:{
            cursor:"not-allowed",
            bg:"#D0D9DF"
          }
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </Button>
    </Link>
  );
}

export function BackButton(props) {
  return (
    <LinkButton {...props} variant="outline">
      <BackArrow /><Text ml="0.5em">Back</Text>
    </LinkButton>
  )
}

export function ContinueButton(props) {
  return (
    <LinkButton {...props}>
      <Text>Next</Text>
    </LinkButton>
  );
}

export function SubmitButton(props) {
  return (
    <LinkButton {...props}>
      <Text>Submit</Text>
    </LinkButton>
  );
}