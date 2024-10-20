import { Flex, SimpleGrid } from "@chakra-ui/react"

export default function Dashboard() {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Flex 
        bg='blue.500' 
        height='80px' 
        alignItems='center' 
        justifyContent='center'
      >
        Dashboard
      </Flex>
      <Flex 
        bg='blue.500' 
        height='80px' 
        alignItems='center' 
        justifyContent='center'
      >
        Tabla
      </Flex>
    </SimpleGrid>
  )
}
