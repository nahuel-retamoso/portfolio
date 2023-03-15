import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex mt={{base: '8%', 'xl': '8%'}} mb='1%' w={{base: '80%', 'xl': '60%'}} justify='center'>
            <Text fontSize={{base: '0.7em', 'xl': '1em'}} color ='whiteAlpha.400'>© 2023 Nahuel Retamoso. All Rights Reserved.</Text>
        </Flex>
    );
}

export default Footer;