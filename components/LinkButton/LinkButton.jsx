import Link from "next/link";
import { Button, Text } from "@chakra-ui/react";
import BackArrow from "../../public/images/back-arrow.svg";

export default function LinkButton({ children, href, onClick, disabled, variant }) {
  return (
    <Link href={href} passHref>
      <Button
        mt={8}
        px="12"
        colorScheme="blue"
        disabled={disabled}
        onClick={onClick}
        variant={ variant || "solid" }
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
      <Text>Continue</Text>
    </LinkButton>
  );
}