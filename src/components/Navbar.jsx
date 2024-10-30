import { Box, Flex, Heading, Text, Button, Spacer, HStack, useToast, Avatar, AvatarBadge} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { CheckIcon } from "@chakra-ui/icons";

export default function Navbar() {

    const toast = useToast()

    const showToast = () => {
        toast({
            title: 'Logged out',
            description: 'You have been logged out',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top',
            icon: <LockIcon />,
        })
    }

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
                <Avatar 
                    name="Mario" 
                    bg='gray.500' 
                    color='white' 
                    src="img/mario.png" 
                    borderWidth="2px" 
                    borderStyle="solid" 
                    borderColor="gray.400"
                >
                    <AvatarBadge 
                        bg='green.500' 
                        color='white'
                        boxSize='22px'
                        border="2px solid"
                        borderColor="white"
                    >
                        <Text 
                            fontSize='12px' 
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            h="100%"
                            w="100%"
                            mt='-2px'
                        >
                            3
                        </Text>
                    </AvatarBadge>
                </Avatar>
                <Text>
                    Mario@ninga.dev
                </Text>
                <Button colorScheme="purple" onClick={showToast}>
                    Logout
                </Button>
            </HStack>
        </Flex>
    )
}
