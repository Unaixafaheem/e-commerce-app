import React from "react";
import { Box, Text, HStack, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.800" color="white" py={5} textAlign="center" mt={10}>
      <HStack justify="center" spacing={6}>
        <Link href="https://github.com" isExternal>
          GitHub
        </Link>
        <Link href="https://linkedin.com" isExternal>
          LinkedIn
        </Link>
        <Link href="mailto:example@email.com">Email</Link>
      </HStack>
      <Text fontSize="sm" mt={2}>
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
