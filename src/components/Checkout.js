import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  FormControl,
  FormLabel,
  Progress,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    card: "",
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const confirmOrder = () => {
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <Box p={6} textAlign="center" borderWidth={1} borderRadius="lg" boxShadow="md">
        <Heading size="lg" mb={4} color="green.500">
          🎉 Order Confirmed!
        </Heading>
        <Text mb={2}>Thank you for shopping with us, {formData.name}!</Text>
        <Text>We’ve sent a confirmation email to {formData.email}.</Text>
      </Box>
    );
  }

  return (
    <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading size="lg" mb={6}>
        Checkout
      </Heading>

      {/* Progress Bar */}
      <Progress value={(step / 3) * 100} mb={6} colorScheme="teal" borderRadius="md" />

      {step === 1 && (
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input name="address" value={formData.address} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input name="email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <Button colorScheme="teal" onClick={nextStep}>
            Next
          </Button>
        </VStack>
      )}

      {step === 2 && (
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Card Number</FormLabel>
            <Input name="card" value={formData.card} onChange={handleChange} />
          </FormControl>
          <FlexButtons prevStep={prevStep} nextStep={nextStep} />
        </VStack>
      )}

      {step === 3 && (
        <VStack spacing={4} align="stretch">
          <Heading size="md">Review Your Order</Heading>
          {cart.map((item, index) => (
            <Box key={index}>
              <Text>
                {item.name} × {item.quantity} = ${item.price * item.quantity}
              </Text>
            </Box>
          ))}
          <Divider />
          <Text fontWeight="bold">Total: ${total}</Text>
          <FlexButtons prevStep={prevStep} confirmOrder={confirmOrder} />
        </VStack>
      )}
    </Box>
  );
}

function FlexButtons({ prevStep, nextStep, confirmOrder }) {
  return (
    <Box display="flex" justifyContent="space-between" w="100%">
      <Button onClick={prevStep}>Back</Button>
      {nextStep && (
        <Button colorScheme="teal" onClick={nextStep}>
          Next
        </Button>
      )}
      {confirmOrder && (
        <Button colorScheme="green" onClick={confirmOrder}>
          Confirm Order
        </Button>
      )}
    </Box>
  );
}

export default Checkout;
