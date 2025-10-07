import React from "react";
import { Box, SimpleGrid, Image, Text, Button, VStack } from "@chakra-ui/react";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist, addToCart, toggleWishlist } = useCart();

  if (wishlist.length === 0) {
    return <Box p={6} bg="white" _dark={{ bg: "gray.700" }} borderRadius="md">No favorites yet</Box>;
  }

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6}>
      {wishlist.map((p) => (
        <VStack key={p.id} p={4} bg="white" _dark={{ bg: "gray.700" }} borderRadius="md" boxShadow="sm">
          <Image src={p.image} boxSize="180px" objectFit="cover" />
          <Text fontWeight="semibold">{p.name}</Text>
          <Text color="gray.500">${p.price}</Text>
          <Button colorScheme="teal" onClick={() => addToCart(p)}>Add to cart</Button>
          <Button variant="ghost" onClick={() => toggleWishlist(p)}>Remove</Button>
        </VStack>
      ))}
    </SimpleGrid>
  );
}
