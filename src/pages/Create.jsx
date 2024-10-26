import { Box, FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"; 
import { Form } from "react-router-dom"; 


export default function Create() {
  return (
    <Box maxW='480px'>
      <Form>
        <FormControl isRequired mb='40px'>
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
            border="0px solid"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            _focus={{ borderColor: "purple.500", boxShadow: "0 0 0 1px purple.500" }}
          />
          <FormHelperText color="gray.500">
            Enter a descriptive task name
          </FormHelperText>
        </FormControl>
      </Form>
    </Box>
  )
}
