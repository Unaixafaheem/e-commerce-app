"use client";

import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
      transition="all 0.15s ease-out"
    >
      <Box h="200px" overflow="hidden">
        <Image
          src={product.image}
          alt={product.name}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>

      <Box p={4}>
        <Stack spacing={2}>
          <Heading size="sm">{product.name}</Heading>
          <Text fontSize="sm" color="gray.600">
            {product.description}
          </Text>
          <Text fontWeight="bold">${product.price.toFixed(2)}</Text>
          <Button
            colorScheme="blue"
            size="sm"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
