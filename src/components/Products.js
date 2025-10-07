import React from "react";
import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: 599, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/150" },
];

function Products() {
  const { addToCart } = useCart();
  const toast = useToast();

  const handleAdd = (product) => {
    addToCart(product);
    toast({
      title: `${product.name} added to cart ✅`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <VStack spacing={5} align="stretch">
      {products.map((product) => (
        <Box
          key={product.id}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
          transition="0.2s"
        >
          <Image src={product.image} alt={product.name} mb={3} borderRadius="md" />
          <Text fontWeight="bold">{product.name}</Text>
          <Text>${product.price}</Text>
          <Button
            mt={2}
            colorScheme="teal"
            size="sm"
            onClick={() => handleAdd(product)}
          >
            Add to Cart
          </Button>
        </Box>
      ))}
    </VStack>
  );
}

export default Products;
