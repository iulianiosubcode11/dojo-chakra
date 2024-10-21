import { Container, Flex, Heading, SimpleGrid, VStack, Text, Box } from "@chakra-ui/react"

export default function Dashboard() {

const boxStyles = {
 p: '10px',
 bg: 'purple.400',
 textColor: 'white',
 m: '10px',
 textAlign: 'center',
//  filter: 'blur(3px)',
}

  return (
    <Container as='section' maxWidth="container.xl">
      <Heading>Dashboard</Heading>
      <Text color="blue.500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Text>

      <Box sx={boxStyles}>Hello</Box>
    </Container>
  )
}
