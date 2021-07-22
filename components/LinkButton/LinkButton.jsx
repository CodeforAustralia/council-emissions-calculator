import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function LinkButton({ children, href, onClick, disabled }) {
  return (
    <Link href={href} passHref>
      <a>
        <Button
          mt={8}
          px="12"
          colorScheme="blue"
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </Button>
      </a>
    </Link>
  );
}
