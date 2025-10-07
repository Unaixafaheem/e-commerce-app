import React from "react";
import { Flex, Box, Heading, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon, ShoppingCartIcon } from "@chakra-ui/icons";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      w="100%"
      p={4}
      align="center"
      position="fixed"
      top={0}
      bg={colorMode === "light" ? "white" : "gray.800"}
      zIndex={1000}
      boxShadow="sm"
    >
      <Heading size="md">My Shop</Heading>
      <Spacer />
      <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        mr={4}
        aria-label="Toggle Dark/Light Mode"
      />
      <IconButton icon={<ShoppingCartIcon />} aria-label="Cart" />
    </Flex>
  );
}

export default Header;
