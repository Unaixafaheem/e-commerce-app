import React from "react";
import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
      transition="0.3s"
    >
      <Image
        src={product.image}
        alt={product.name}
        mb={3}
        borderRadius="md"
        boxShadow="sm"
      />
      <VStack align="stretch" spacing={1}>
        <Text fontWeight="bold" fontSize="lg">
          {product.name}
        </Text>
        <Text color="gray.600">${product.price}</Text>
        <Button
          mt={2}
          colorScheme="teal"
          size="sm"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
}

export default ProductCard;
