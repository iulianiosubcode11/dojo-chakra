import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"

export default function Dashboard() {
  return (

    //   <Flex flexWrap="wrap" justifyContent="center" gap={10}>
    //   {[...Array(10)].map((_, index) => (
    //     <Box 
    //       key={index}
    //       bg='gray.500' 
    //       h='200px' 
    //       minW='360px'
    //       w='400px'
    //       border='1px solid' 
    //       textColor='white'
    //       flexGrow={0}
    //       flexShrink={0}
    //     >
    //       {index === 0 ? 'gaga' : ''}
    //     </Box>
    //   ))}
    // </Flex>

    <SimpleGrid spacing={10} minChildWidth='350px'>
      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'>
        <Text color={{ base: 'pink', md: 'blue', lg: 'green' }}>Hello</Text>
      </Box>
      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>

      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>

      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
      <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
    </SimpleGrid>

  )
}
