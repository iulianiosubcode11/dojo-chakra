import { Box, SimpleGrid, Text, Button, Image, Link, Checkbox, IconButton, Flex } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import React from "react";

const data = [
  { id: "#6932", rarity: 4976, price: "0.0149", bestOffer: "0.0149", lastSale: "-", owner: "0xd6...35b0" },
  { id: "#6619", rarity: 5225, price: "0.0149", bestOffer: "0.0149", lastSale: "0.0091", owner: "0x5b...620b" },
  { id: "#6588", rarity: 1388, price: "0.0149", bestOffer: "0.0149", lastSale: "0.0199", owner: "0x01...654e" },
  { id: "#6471", rarity: 4224, price: "0.0149", bestOffer: "0.0149", lastSale: "0.0389", owner: "0x67...cdf8" },
  { id: "#6457", rarity: 818, price: "0.0149", bestOffer: "0.0149", lastSale: "0.0218", owner: "0xb0...3647" },
  // Add additional rows as needed
];

export default function ResponsiveGridTable() {
  return (
    <Box overflowX="auto" bg="gray.900" color="pink.500" p="4" borderRadius="md">
      {/* Header */}
      <SimpleGrid
        columns={{ base: 4, md: 9 }}
        spacing="4"
        alignItems="center"
        textAlign="center"
        p="2"
        borderBottom="1px"
        borderColor="gray.700"
        color="gray.500"
        fontSize="xs"
        fontWeight="bold"
        gridTemplateColumns="40px 320px repeat(6, 1fr) 35px"
      >
        <Text>Item</Text>
        <Text>Rarity</Text>
        <Text>Price</Text>
        <Text>Best Offer</Text>
        <Text>Last Sale</Text>
        <Text>Owner</Text>
        <Text>Actions</Text>
      </SimpleGrid>

      {/* Data Rows */}
      {data.map((item, index) => (
        <SimpleGrid
          key={index}
          columns={{ base: 4, md: 9 }}
          spacing="4"
          alignItems="center"
          textAlign="center"
          p="2"
          borderBottom="1px"
          borderColor="gray.700"
          fontSize="sm"
          color="gray.200"
          gridTemplateColumns="40px 320px repeat(6, 1fr) 35px"
        >
          <Box>
            <Checkbox colorScheme="pink" size="sm" />
          </Box>
          <Flex
            alignItems="center"
            bg="koinDark.900"
            py="1"
            pr="2"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
            fontSize="xs"
            borderBottom="0px"
            borderColor="koinDark.500"
            // shadow={{ base: "none", md: "10px 0 10px -4px rgba(0, 0, 0, 1)" }}
          >
            <Image
              src="https://via.placeholder.com/40"
              alt={item.id}
              boxSize="40px"
              borderRadius="md"
              mr="2"
            />
            <Text isTruncated>Omega Kong {item.id}</Text>
          </Flex>
          <Box>
            <Text fontWeight="bold" color={item.rarity < 1000 ? "pink.300" : "gray.200"}>{item.rarity}</Text>
          </Box>
          <Box>
            <Button variant="solid" size="xs" colorScheme="pink" borderRadius="full">
              Connect
            </Button>
          </Box>
          <Box>
            <Text>{item.price} ETH</Text>
          </Box>
          <Box>
            <Text>{item.bestOffer} ETH</Text>
          </Box>
          <Box>
            <Text>{item.lastSale}</Text>
          </Box>
          <Box>
            <Link href={`/owner/${item.owner}`} isExternal>
              <Text isTruncated color="blue.400">{item.owner}</Text>
            </Link>
          </Box>
          <Box>
            <IconButton
              icon={<FiMoreVertical />}
              size="xs"
              variant="ghost"
              aria-label="More options"
              colorScheme="pink"
            />
          </Box>
        </SimpleGrid>
      ))}
    </Box>
  );
};
