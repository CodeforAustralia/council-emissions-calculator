import Link from "next/link";
import { Button, Text, Flex } from "@chakra-ui/react";
import BackArrow from "../../public/images/back-arrow.svg";

export default function LinkButton({
  children,
  href,
  onClick,
  disabled,
  variant,
}) {
  return (
    <Link href={href} passHref>
      <Button
        disabled={disabled}
        onClick={onClick}
        variant={variant || "solid"}
        colorScheme="#044B7F.700"
        size="lg"
        fontSize="18px"
        w="350px"
        h="55px"
        outline="none"
      >
        {children}
      </Button>
    </Link>
  );
}

export function BackButton(props) {
  return (
    <LinkButton {...props} variant="outline">
      <BackArrow />
      <Text ml="0.5em">Back</Text>
    </LinkButton>
  );
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
