import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Image,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

const MotionDrawerContent = motion(DrawerContent);

function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const drawerBg = useColorModeValue("gray.50", "gray.800");
  const itemBg = useColorModeValue("white", "gray.700");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <MotionDrawerContent
        bg={drawerBg}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <DrawerCloseButton />
        <DrawerHeader fontSize="xl" fontWeight="bold">
          🛒 Your Cart
        </DrawerHeader>

        <DrawerBody>
          {cart.length === 0 ? (
            <Text color="gray.500" textAlign="center" mt={10}>
              No items in your cart yet.
            </Text>
          ) : (
            <VStack spacing={4} align="stretch">
              {cart.map((item) => (
                <Box
                  key={item.id}
                  borderWidth="1px"
                  borderRadius="lg"
                  p={3}
                  bg={itemBg}
                  shadow="sm"
                >
                  <HStack justify="space-between">
                    <HStack>
                      <Image
                        src={item.image}
                        alt={item.name}
                        boxSize="60px"
                        borderRadius="md"
                        objectFit="cover"
                      />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="medium">{item.name}</Text>
                        <Text fontSize="sm" color="gray.500">
                          ${item.price}
                        </Text>
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
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                      <IconButton
                        size="sm"
                        colorScheme="red"
                        icon={<FaTrash />}
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove"
                      />
                    </HStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          )}
        </DrawerBody>

        <DrawerFooter flexDir="column" borderTopWidth="1px">
          <Box w="100%" textAlign="right" mb={3}>
            <Text fontSize="lg" fontWeight="bold">
              Total: ${total.toFixed(2)}
            </Text>
          </Box>
          <HStack w="100%" spacing={3}>
            <Button w="50%" onClick={clearCart} variant="outline" colorScheme="red">
              Clear Cart
            </Button>
            <Button w="50%" colorScheme="teal" onClick={onClose}>
              Checkout
            </Button>
          </HStack>
        </DrawerFooter>
      </MotionDrawerContent>
    </Drawer>
  );
}

export default CartDrawer;
