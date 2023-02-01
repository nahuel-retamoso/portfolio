import {Text, Box } from "@chakra-ui/react";

const Title = () => {
    return (
            <Box mt={{base: '25%', '2xl': '5%'}} w={{base: '90%', '2xl': '44%'}} h={{base:'7vh', '2xl':'13.435vh'}}>
                    <Text fontFamily='monospace' fontSize={{base: '2em', '2xl': '4em'}} fontWeight='bold' color='whiteAlpha.900' mt='2%' align='center'>{'<'} <Text display='inline' color='whiteAlpha.900'>Nahuel Retamoso</Text> {'/ >'} </Text>
            </Box>
    );
};

export default Title;