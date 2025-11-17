import { Box, Heading, Text, Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "A great product for everyday use.",
    price: 29.99,
    image: "/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Perfect for work, study, or fun.",
    price: 49.99,
    image: "/product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "High quality and super comfortable.",
    price: 39.99,
    image: "/product3.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Container maxW="6xl" py={10}>
        <Box mb={8}>
          <Heading mb={2}>Welcome to My Store</Heading>
          <Text color="gray.600" maxW="lg">
            This is your e-commerce app rebuilt with Next.js and Chakra UI.
            Replace this text and products with your real data from the old
            React app.
          </Text>
        </Box>

        <ProductGrid products={products} />
      </Container>

      <Footer />
    </>
  );
}
