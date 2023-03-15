import {Text, Box } from "@chakra-ui/react";

const Title = () => {
    return (
            <Box mt={{base: '25%', 'xl': '5%'}} w={{base: '90%', 'xl': '44%'}} h={{base:'7vh', 'xl':'8vh'}}>
                    <Text fontFamily='monospace' fontSize={{base: '2em', 'xl': '3em'}} fontWeight='bold' color='whiteAlpha.900' mt='2%' align='center'>{'<'} <Text display='inline' color='whiteAlpha.900'>Nahuel Retamoso</Text> {'/ >'} </Text>
            </Box>
    );
};

export default Title;