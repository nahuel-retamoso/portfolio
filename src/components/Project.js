import { GridItem, Heading, Text, Flex, Icon, Link, Image, Box } from '@chakra-ui/react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Project = ({ title, description, source, website, image }) => {
    return (
        <GridItem w='100%' h='100%' >
        <Box h='86%'>
            <Image src={image} alt='screen' />

            <Heading textDecoration='underline' textDecorationThickness='4px' textDecorationColor='red.600' color='whiteAlpha.900' size='md' mt='5%' align='center' fontFamily='mono' >{title}</Heading>

            <Text color='whiteAlpha.900' fontSize='1.1em' fontFamily='monospace' m='5%' align='center' >{description}</Text>
        </Box>


        <Flex h='8.5%' justify='center' align='centers' color='whiteAlpha.900'>

            <Icon as={FaGithub} width="13%" height="90%"/>
            <Link _hover={{textDecoration: 'none', bg:'red.50', color:'blackAlpha.900'}} p='0.5%' mr='10%' href={source}>Source</Link>

            <Icon as={FaGlobe} width="13%" height="90%"/>
            <Link _hover={{textDecoration: 'none', bg:'red.50', color:'blackAlpha.900'}} p='0.5%' href={website}>Website</Link>
        </Flex>

    </GridItem>
    );
};

export default Project;
