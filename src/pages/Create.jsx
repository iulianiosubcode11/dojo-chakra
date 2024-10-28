import { Box, FormControl, FormLabel, Input, FormHelperText, Textarea, Checkbox, Button, Flex, Container } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";


export default function Create() {
  return (
    <Container 
      display="flex"
      justifyContent="flex-start" //align items to the left horizontally
      alignItems="flex-start" //align items to the bottom vertically
      p={0}        
      minW="100%"    
    >
      <Box
        w="100%"
        maxW='480px'
        mt={4}              
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="sm"
        border="1px solid"
        borderColor="gray.200"
      >
        <Form method="post" action="/create">
          <FormControl mb='40px'>
            <FormLabel color="gray.800">
              Title
              <Box as="span" color="tomato" ml={1}>
                *
              </Box>
            </FormLabel>
            <Input
              type="text"
              bg="white"
              color="gray.800"
              border="1px solid"
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
              _focus={{ borderColor: "purple.500", boxShadow: "0 0 0 1px purple.500" }}
              placeholder="Enter task title"
              _placeholder={{ color: "gray.400" }}
            />
            <FormHelperText color="gray.500">
              Enter a descriptive task name
            </FormHelperText>
          </FormControl>
          <FormControl mb='40px' isRequired>
            <FormLabel color="gray.800">Task description:</FormLabel>
            <Textarea
              bg="white"
              color="gray.800"
              border="1px solid"
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
              _focus={{ borderColor: "purple.500", boxShadow: "0 0 0 1px purple.500" }}
              placeholder="Enter a description for your task"
              _placeholder={{ color: "gray.400" }}
              name="description"
            />
          </FormControl>
          <FormControl>
            <Checkbox
              name="isPriority"
              colorScheme="purple"
              size='lg'
              // defaultChecked
              sx={{
                'span.chakra-checkbox__control': {
                  bg: 'white',
                  borderColor: 'gray.300',
                  borderWidth: '1px',  // Set border width to 1px
                  borderRadius: '4px',
                  _hover: { borderColor: 'gray.400' },
                  _focus: { borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' },
                }
              }}
            >
              <FormLabel color="gray.800" mb={0} ml={1}>Set as priority task</FormLabel>
            </Checkbox>
          </FormControl>
          <Flex justifyContent="space-between" mt='32px' gap={4}>
            <Button type="submit" colorScheme="purple" bg="purple.200" size="lg" w='full'
              _hover={{ color: "gray.800", bg: "purple.300" }}
            >Create Task</Button>
            <Button
              type="reset"
              color="gray.600"
              border="2px solid"
              borderColor="gray.400"
              bg="white"
              _hover={{ borderColor: "gray.400", color: "gray.800", bg: "gray.100" }}
              size="lg"
              w='full'
            >
              Cancel
            </Button>
          </Flex>
        </Form>
      </Box>
    </Container>
  )
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
      title: data.get('title'),
      description: data.get('description'),
      isPriority: data.get('isPriority') === ''
  };

  console.log(task);

  return redirect('/');
}
