import { Flex, Highlight, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";

const Header = () => {

    const [size, setSize] = useState([0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

    return (
       <Flex w={{base: '100%', 'xl': '47%'}} h={{base: 'fit-content','xl': '60vh'}} align='center' direction={{base: 'column', 'xl': 'row'}}>
            <Text fontFamily='monospace'  w={{base:'80%', 'xl': '50%'}} color='whiteAlpha.800' m='4%' fontSize='1.5em' ><Highlight query={['frontend developer', 'React']} styles={{bg:'red.600', color:'whiteAlpha.800', p:'1%'}}>Hi, I'm a frontend developer from Buenos Aires. Check out my projects to see what I can do. I specialize in React and love building modern web applications. If you like what you see, don't hesitate to get in touch.</Highlight></Text>
            {size > 500 ? <Keyboard /> : null}
       </Flex>
    );
    }

export default Header;