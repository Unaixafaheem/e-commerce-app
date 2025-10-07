import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

  return (
    <VStack spacing={3} align="stretch">
      <Text fontWeight="bold" fontSize="xl">Your Cart 🛒</Text>
      {cartItems.length === 0 ? (
        <Text>No items in cart</Text>
      ) : (
        cartItems.map((item) => (
          <Box key={item.id} p={3} borderWidth="1px" borderRadius="md">
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </Box>
        ))
      )}
    </VStack>
  );
}

export default Cart;
