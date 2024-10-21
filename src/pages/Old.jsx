import { Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react"
import InvestmentPieChart from "./Pie"

export default function Old() {

  const boxRed = {
    w: '150px',
    h: '50px',
    textColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    borderRadius: '6px',
  }


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
        Dashboardx
      </Heading>
      <Flex align='center' justifyContent='center' w='100%' py='32px'>
        <InvestmentPieChart />
      </Flex>

      <Flex bg="lightgray" height="80px" alignItems="center" justify='space-between' gap='24px' wrap='wrap' px='24px'>
        <Flex sx={boxRed} bg='tomato'>01</Flex>
        <Flex sx={boxRed} bg='blue' flex='2'>02</Flex>
        <Flex sx={boxRed} bg='green' flex='1'>03</Flex>
        <Flex sx={boxRed} bg='orange'>04</Flex>
      </Flex>

    </VStack>
  )
}

