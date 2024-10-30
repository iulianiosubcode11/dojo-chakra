import { Box, Card, CardBody, CardFooter, CardHeader, Flex, SimpleGrid, Text, Heading, HStack, Button, Divider, Avatar } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import { EditIcon, ViewIcon, CheckIcon } from "@chakra-ui/icons"

export default function Dashboard() {
  const tasks = useLoaderData()

  if (!tasks) return <Text>Loading...</Text>
  if (tasks.length === 0) return <Text>No tasks found.</Text>

  return (
    <SimpleGrid spacing='24px' minChildWidth='300px'>
      {tasks.map(task => (
        <Card key={task.id} borderTop='8px solid' borderColor='purple.600' bg='#232B3A' _hover={{borderColor: 'purple.400', bg: 'gray.700'}} overflow='hidden'>
          <CardHeader color='gray.200'>
            <Flex alignItems='center' gap={4}>
              <Avatar src={task.img || 'https://via.placeholder.com/150'} />
              <Box>
                <Heading as='h3' size='sm'>{task.title || 'No Title'}</Heading>
                <Text size='xs'>by {task.author || 'No Author'}</Text>               
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.300">
            <Text>{task.description || 'No Description'}</Text>
          </CardBody>
          <Divider borderColor='gray.600' />
          <CardFooter color='gray.200'>
            <HStack alignContent='center' justifyContent='space-between' w='100%'>
              <HStack>
                <Button fontSize='sm' leftIcon={<ViewIcon />} _hover={{bg:'gray.200', textColor:'black'}}>Watch</Button>
                <Button fontSize='sm' leftIcon={<EditIcon />} variant='outline' color='gray.300' _hover={{bg:'gray.600', textColor:'white'}}>Comment</Button>
              </HStack>
              <HStack pl={2}>
                <Button leftIcon={<CheckIcon />} variant='ghost' fontSize='xs' lineHeight='16px' color='gray.300' _hover={{bg:'gray.600', textColor:'white'}}>FAQ</Button>
                {/* <Text size='10px' fontSize='xs' lineHeight='16px'>Status: {task.priority || 'Unknown'}</Text> */}
              </HStack>              
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`)
    if (!res.ok) throw new Error('Failed to fetch tasks')
    const data = await res.json()
    console.log('Fetched tasks:', data) // Add this line for debugging
    return data
  } catch (error) {
    console.error('Error loading tasks:', error)
    return []
  }
}
