import { Flex, Link, Icon, useToast, useColorModeValue } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import {RiMailFill} from "react-icons/ri";

const Contact = () => {

    const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

    const hoverColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

    const hoverTextColor = useColorModeValue('whiteAlpha.800', 'blackAlpha.800');

    const toast = useToast()

    const copy = () => {
        navigator.clipboard.writeText('nahuel.retamoso@gmail.com')
        toast({
            title: "Email copied to clipboard",
            status: "info",
            duration: 2000,
            isClosable: true,
        })
    }

    return (
        <Flex color={textColor} fontFamily='mono' fontSize={{base: '0.9em', 'xl': '1.2em'}}  w={{base: '90vw', 'xl': '57%'}} h='6vh' justify='center' align='center'>
            <Icon as={GoMarkGithub} mr='1.5%' w={8} h={8} />
            <Link _hover={{textDecoration: 'none', bg:`${hoverColor}`, color:`${hoverTextColor}`}} p='0.2%' mr={{base:'7%', 'xl': '18%'}} href="https://github.com/nahuel-retamoso">Github</Link>
            <Icon as={BsLinkedin} mr='1.5%' w={8} h={8} />
            <Link _hover={{textDecoration: 'none', bg:`${hoverColor}`, color:`${hoverTextColor}`}} p='0.2%' mr={{base:'7%', 'xl': '18%'}} href="https://www.linkedin.com/in/nahuel-retamoso-8a468b10b/" >LinkedIn</Link>
            <Icon as={RiMailFill} mr='1.5%' w={9} h={9} />
            <Link _hover={{textDecoration: 'none', bg:`${hoverColor}`, color:`${hoverTextColor}`}} p='0.2%' onClick={() => copy()}>Email</Link>
        </Flex>
    );
 }

export default Contact;