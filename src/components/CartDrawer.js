import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  Image,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>🛒 Your Cart</DrawerHeader>

        <DrawerBody>
          {cart.length === 0 ? (
            <Text>No items in cart</Text>
          ) : (
            <VStack spacing={4} align="stretch">
              {cart.map((item) => (
                <HStack
                  key={item.id}
                  justify="space-between"
                  p={2}
                  borderWidth="1px"
                  borderRadius="md"
                >
                  <HStack>
                    <Image
                      src={item.image}
                      alt={item.name}
                      boxSize="50px"
                      borderRadius="md"
                    />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">{item.name}</Text>
                      <Text>${item.price}</Text>
                    </VStack>
                  </HStack>
                  <HStack>
                    <Button
                      size="sm"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </Button>
                    <Text>{item.quantity}</Text>
                    <Button
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <IconButton
                      size="sm"
                      colorScheme="red"
                      icon={<FaTrash />}
                      onClick={() => removeFromCart(item.id)}
                    />
                  </HStack>
                </HStack>
              ))}
            </VStack>
          )}
        </DrawerBody>

        <DrawerFooter flexDir="column">
          <Box w="100%" textAlign="right" mb={3}>
            <Text fontWeight="bold">Total: ${total.toFixed(2)}</Text>
          </Box>
          <HStack w="100%" spacing={3}>
            <Button w="50%" onClick={clearCart} variant="outline" colorScheme="red">
              Clear Cart
            </Button>
            <Button w="50%" colorScheme="blue" onClick={onClose}>
              Checkout
            </Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CartDrawer;
