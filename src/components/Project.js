import { GridItem, Heading, Text, Flex, Icon, Link, Image, Box, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Project = ({ title, description, source, website, image }) => {

    const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
    
    const highlightColor = useColorModeValue('custom.lightHighlight', 'custom.darkHighlight');

    const hoverColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

    const hoverTextColor = useColorModeValue('whiteAlpha.800', 'blackAlpha.800');

    return (
        <GridItem pt='50px' w='100%' h='100%'>
        <Box h='86%'>
            <Image borderRadius='base' src={image} alt='screen' />

            <Heading textDecoration='underline' textDecorationThickness='4px' textDecorationColor={highlightColor} color={textColor} size='md' mt='5%' align='center' fontFamily='mono' >{title}</Heading>

            <Text color={textColor} fontSize='1.1em' fontFamily='monospace' m='5%' align='center' >{description}</Text>
        </Box>


        <Flex h='8.5%' justify='center' align='centers' color={textColor}>

            <Icon as={FaGithub} width="13%" height="90%"/>
            <Link _hover={{textDecoration: 'none', bg:`${hoverColor}`, color:`${hoverTextColor}`}} p='0.5%' mr='10%' href={source}>Source</Link>

            <Icon as={FaGlobe} width="13%" height="90%"/>
            <Link _hover={{textDecoration: 'none', bg:`${hoverColor}`, color:`${hoverTextColor}`}} p='0.5%' href={website}>Website</Link>
        </Flex>

    </GridItem>
    );
};

export default Project;
