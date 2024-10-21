import { Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react"
import InvestmentPieChart from "./Pie"

export default function Old() {
  return (
    <VStack spacing={4} align="stretch">
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
      <Heading align='center'>
        Dashboard
      </Heading>
      <Flex>
        <InvestmentPieChart />
      </Flex>
    </VStack>
  )
}
