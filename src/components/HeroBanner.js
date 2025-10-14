import React from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function HeroBanner() {
  return (
    <MotionBox
      bgImage="url('https://images.unsplash.com/photo-1607082349566-187342b32d94')"
      bgSize="cover"
      bgPos="center"
      h="60vh"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <VStack spacing={4} textAlign="center" bg="rgba(0,0,0,0.5)" p={6} rounded="lg">
        <Text fontSize="3xl" fontWeight="bold">
          Welcome to MyShop
        </Text>
        <Text fontSize="lg">Find the best deals and latest trends</Text>
        <Button colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </VStack>
    </MotionBox>
  );
}

export default HeroBanner;
