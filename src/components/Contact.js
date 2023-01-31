import { Flex, Link, Icon, useToast } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import {RiMailFill} from "react-icons/ri";

const Contact = () => {

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
        <Flex color='whiteAlpha.900' fontFamily='mono' fontSize='1.2em'  w='57%' h='6vh' justify='center' align='center'>
            <Icon as={GoMarkGithub} mr='1.5%' w={8} h={8} />
            <Link _hover={{textDecoration: 'none', bg:'red.50', color:'blackAlpha.900'}} p='0.2%' mr='18%' href="https://github.com/nahuel-retamoso">Github</Link>
            <Icon as={BsLinkedin} mr='1.5%' w={8} h={8} />
            <Link _hover={{textDecoration: 'none', bg:'red.50', color:'blackAlpha.900'}} p='0.2%' mr='18%' href="https://www.linkedin.com/in/nahuel-retamoso-8a468b10b/" >LinkedIn</Link>
            <Icon as={RiMailFill} mr='1.5%' w={9} h={9} />
            <Link _hover={{textDecoration: 'none', bg:'red.50', color:'blackAlpha.900'}} p='0.2%' onClick={() => copy()}>Email</Link>
        </Flex>
    );
 }

export default Contact;