import React from "react";
import { Box, Text, Link, Stack } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="teal.600" color="white" py={6} mt={10}>
      <Stack direction={{ base: "column", md: "row" }} spacing={6} justify="center" align="center">
        <Text>© 2025 My Shop. All rights reserved.</Text>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Privacy Policy</Link>
      </Stack>
    </Box>
  );
}

export default Footer;
