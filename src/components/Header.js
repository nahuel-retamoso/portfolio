import { Flex, Highlight, Text } from "@chakra-ui/react";
import Keyboard from "./Keyboard";

const Header = () => {
    return (
       <Flex w='47%' h='60vh' align='center'>
            <Text fontFamily='monospace'  w='50%' color='whiteAlpha.800' m='4%' fontSize='1.5em' ><Highlight query={['frontend developer', 'React']} styles={{bg:'red.600', color:'whiteAlpha.800', p:'1%'}}>Hi, I'm a frontend developer from Buenos Aires. Check out my projects to see what I can do. I specialize in React and love building modern web applications. If you like what you see, don't hesitate to get in touch.</Highlight></Text>
            <Keyboard />
       </Flex>
    );
    }

export default Header;