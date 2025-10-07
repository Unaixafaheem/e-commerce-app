import React from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

export default function HeroBanner() {
  return (
    <Box
      bgGradient="linear(to-r, brand.400, brand.500)"
      color="white"
      p={[6, 10]}
      borderRadius="lg"
      mb={6}
      boxShadow="lg"
    >
      <Stack direction={["column", "row"]} align="center" justify="space-between">
        <Box>
          <Heading size="lg">Big Savings — New Arrivals</Heading>
          <Text mt={2} opacity={0.95}>
            Discover curated items with fast checkout and secure experience.
          </Text>
        </Box>

        <Button colorScheme="blackAlpha" size="lg" mt={[4, 0]}>
          Shop Bestsellers
        </Button>
      </Stack>
    </Box>
  );
}
