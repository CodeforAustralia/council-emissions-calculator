import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function LinkButton({ children, href, onClick, disabled, outline }) {
  return (
    <Link href={href} passHref>
      <Button
        mt={8}
        px="12"
        colorScheme="blue"
        variant={ outline ? "outline" : "solid" }
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Button>
    </Link>
  );
}
