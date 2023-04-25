import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, Link, Text, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

    const highlightColor = useColorModeValue('custom.lightHighlight', 'custom.darkHighlight');

    return (
       <Flex zIndex='overlay' backdropFilter='blur(10px)' pos='fixed' w='100%' h='7vh' align='center' >
            <Flex ml={{base: '5%', 'xl': '20%'}} w={{base: '45%', 'xl': '25%'}} justify='center' align='center' >
            <Text ml='3%' color={textColor} fontWeight='bold' fontSize={{base: '0.8em', 'xl': '1.5em'}} as='b' fontFamily='mono'>NR</Text>
                <Text ml='3%' color={textColor} fontWeight='hairline' fontSize={{base: '0.8em', 'xl': '1.5em'}} as='b' fontFamily='mono'>Portafolio</Text>
            </Flex>
            <Flex color={textColor} w='50%' justify='right' align='center' >
                <Icon as={GoMarkGithub} mr='1%' w={6} h={6} />
                <Link _hover={{textDecoration: 'none', bg:`${highlightColor}`}} p='0.5%' href='https://github.com/nahuel-retamoso/portfolio'>Source</Link>
            </Flex>
            <MotionButton  initial={false} // Evita la animación inicial
        animate={{ rotate: colorMode === 'light' ? 0 : 360}}
        transition={{ duration: 0.5 }}
        bgColor="gray.400"
        ml="5%"
        mr={{ base: '5%', xl: '20%' }}
        w="3%"
        h="70%"
        onClick={() => toggleColorMode()} >
                {colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
            </MotionButton>
       </Flex>
    );
    }

export default Navbar;