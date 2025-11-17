import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <Box mt={8}>
      <Heading size="md" mb={4}>
        Featured Products
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
