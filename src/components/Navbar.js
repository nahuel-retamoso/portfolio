import { MoonIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, Link, Text, Icon } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";

const Navbar = () => {
    return (
       <Flex zIndex='overlay' backdropFilter='blur(10px)' bg='whiteAlpha.100' pos='fixed' w='100%' h='7vh' align='center' >
            <Flex ml={{base: '5%', 'xl': '20%'}} w={{base: '45%', 'xl': '25%'}} justify='center' align='center' >
                <Image mb='2%' boxSize={{base: '40%', 'xl': '19%'}} src="./cat.png" alt="cat" />
                <Text ml='3%' color='whiteAlpha.900' fontSize={{base: '0.8em', 'xl': '1.2em'}} as='b' fontFamily='monospace'>Nahuel Retamoso's portfolio</Text>
            </Flex>
            <Flex color='whiteAlpha.900' w='50%' justify='right' align='center' >
                <Icon as={GoMarkGithub} mr='1%' w={6} h={6} />
                <Link _hover={{textDecoration: 'none', bg:'red.500'}} p='0.5%' href='https://github.com/nahuel-retamoso/portfolio'>Source</Link>
            </Flex>
            <Button bgColor='gray.400' ml='5%' mr={{base: '5%', 'xl': '20%'}} w='3%' h='70%' >
                <MoonIcon />
            </Button>
       </Flex>
    );
    }

export default Navbar;