import { Box, Flex, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react";


export default function Navbar() {

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
        <Flex as='nav' p='10px' pb={6} alignItems='center' gap='10px' color='gray.900' justifyContent='center'>
            <Heading as='h1' >
                Dojo Tasks
            </Heading>
            <Spacer />

            <HStack spacing='20px'>
                <Box bg='gray.400' rounded={6} p='10px' color='white' fontWeight='bold'>
                    <Text>
                        M
                    </Text>
                </Box>
                <Text>
                    Mario@ninga.dev
                </Text>
                <Button colorScheme="purple">
                    Logout
                </Button>
            </HStack>
        </Flex>
    )
}
