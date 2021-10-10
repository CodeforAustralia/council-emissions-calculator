import Link from "next/link";
import { Box, Button, Text } from "@chakra-ui/react";
import BackArrow from "../../public/images/back-arrow.svg";

export default function LinkButton({ children, href, onClick, disabled, variant, width, topMargin }) {
  return (
    <Link href={href} passHref>
      <Button
        mt={topMargin || 12}
        px="12"
        colorScheme="blue"
        disabled={disabled}
        onClick={onClick}
        variant={ variant || "solid" }
        w={width || "200px"}
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