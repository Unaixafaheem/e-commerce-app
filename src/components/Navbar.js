import React from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar({ onCartOpen }) {
  const { cart } = useCart();
  const { colorMode, toggleColorMode } = useColorMode();

  // Count total items in cart
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box
      px={6}
      py={4}
      bg={useColorModeValue("gray.100", "gray.900")}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        {/* Logo / Brand */}
        <Heading size="md" color="teal.500">
          🛍️ MyStore
        </Heading>

        <Flex gap={4} align="center">
          {/* Dark/Light Mode Toggle */}
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />

          {/* Cart Button */}
          <Box position="relative">
            <IconButton
              aria-label="Open cart"
              icon={<FaShoppingCart />}
              onClick={onCartOpen}
            />
            {cartCount > 0 && (
              <Badge
                colorScheme="red"
                borderRadius="full"
                position="absolute"
                top="-1"
                right="-1"
                fontSize="0.7em"
              >
                {cartCount}
              </Badge>
            )}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
