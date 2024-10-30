import { Box, Card, CardBody, CardFooter, CardHeader, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

export default function DashboardOld() {

  const tasks = useLoaderData()

  return (

    <SimpleGrid spacing={10} minChildWidth='300px'>
      {tasks && tasks.map(task => (
        <Card key={task.id}>
          <CardHeader>
              <Text>Card Header</Text>
          </CardHeader>
          <CardBody>
            <Text>Card Body</Text>
          </CardBody>
          <CardFooter>
            <Text>Card Footer</Text>
          </CardFooter>
        </Card>
      ))}     
    </SimpleGrid>

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

    //==================================================

    // <SimpleGrid spacing={10} minChildWidth='350px'>
    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'>
    //     <Text color={{ base: 'pink', md: 'blue', lg: 'green' }}>Hello</Text>
    //   </Box>
    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>

    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>

    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
    //   <Box bg='gray.500' h='200px' border='1px solid' textColor='white'></Box>
    // </SimpleGrid>

  )
}

export const tasksLoader = async () => {
  try {
    const res = await fetch('http://localhost:3000/tasks')
    if (!res.ok) throw new Error('Failed to fetch tasks')
    return res.json()
  } catch (error) {
    console.error('Error loading tasks:', error)
    return []
  }
}

