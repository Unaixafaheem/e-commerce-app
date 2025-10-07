import React from "react";
import { Box, Container, VStack, useDisclosure } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CartProvider>
      <Box>
        <Navbar onCartOpen={onOpen} />

        <Container maxW="container.lg" py={10}>
          <VStack spacing={10} align="stretch">
            <Products />
            <Checkout />
          </VStack>
        </Container>

        <CartDrawer isOpen={isOpen} onClose={onClose} />
        <Footer />
      </Box>
    </CartProvider>
  );
}

export default App;
