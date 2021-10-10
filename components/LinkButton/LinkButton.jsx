import Link from "next/link";
import { Button, Text } from "@chakra-ui/react";
import BackArrow from "../../public/images/back-arrow.svg";

export default function LinkButton({ children, href, onClick, disabled }) {
  return (
    <Link href={href} passHref>
      <Button
        disabled={disabled}
        onClick={onClick}
        colorScheme="#044B7F.700"
        size="lg"
        fontSize="18px"
        w="330px"
        h="55px"
        variant="ghost"
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
      <Text mt="11px">Next</Text>
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
