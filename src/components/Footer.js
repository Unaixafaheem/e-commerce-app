import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="gray.200"
      mt={12}
      py={4}
      textAlign="center"
    >
      <Text fontSize="sm" color="gray.500">
        © {new Date().getFullYear()} My E-Commerce. All rights reserved.
      </Text>
    </Box>
  );
}
