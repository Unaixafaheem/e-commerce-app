"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CartProvider } from "../context/CartContext";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>{children}</CartProvider>
    </ChakraProvider>
  );
}
