"use client";

import {
  Box,
  Flex,
  Heading,
  IconButton,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
  Stack,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { items, totalItems, totalPrice, removeFromCart, clearCart } =
    useCart();

  return (
    <>
      <Box
        as="header"
        borderBottom="1px solid"
        borderColor="gray.200"
        px={8}
        py={4}
        position="sticky"
        top={0}
        zIndex={10}
        bg="white"
      >
        <Flex align="center" justify="space-between">
          <Heading size="md">My E-Commerce</Heading>

          <Flex align="center" gap={4}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Shop</Button>

            <Box position="relative">
              <IconButton
                aria-label="Open cart"
                icon={<FiShoppingCart />}
                onClick={onOpen}
                variant="outline"
              />
              {totalItems > 0 && (
                <Badge
                  colorScheme="red"
                  borderRadius="full"
                  position="absolute"
                  top="-6px"
                  right="-6px"
                  fontSize="0.7rem"
                  px={1.5}
                >
                  {totalItems}
                </Badge>
              )}
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Your Cart</DrawerHeader>

          <DrawerBody>
            {items.length === 0 ? (
              <Text color="gray.500">Your cart is empty.</Text>
            ) : (
              <Stack spacing={4}>
                {items.map((item) => (
                  <Flex key={item.id} justify="space-between" align="center">
                    <Box>
                      <Text fontWeight="semibold">{item.name}</Text>
                      <Text fontSize="sm" color="gray.600">
                        Qty: {item.quantity} × ${item.price.toFixed(2)}
                      </Text>
                    </Box>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Flex>
                ))}
              </Stack>
            )}
          </DrawerBody>

          <DrawerFooter
            borderTopWidth="1px"
            flexDir="column"
            alignItems="stretch"
          >
            <Flex justify="space-between" w="100%" mb={2}>
              <Text fontWeight="bold">Total:</Text>
              <Text fontWeight="bold">${totalPrice.toFixed(2)}</Text>
            </Flex>
            <Button
              w="100%"
              colorScheme="blue"
              mb={2}
              isDisabled={items.length === 0}
            >
              Checkout
            </Button>
            <Button
              w="100%"
              variant="ghost"
              onClick={clearCart}
              isDisabled={items.length === 0}
            >
              Clear cart
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

