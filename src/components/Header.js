import { Box, Divider, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import { TypeAnimation } from 'react-type-animation';
import react from "../assets/logos/react-color.svg"
import javascript from "../assets/logos/javascript-color.svg"
import next from "../assets/logos/nextdotjs-color.svg"
import chakra from "../assets/logos/chakraui-color.svg"
import firebase from "../assets/logos/firebase-color.svg"
import tailwind from "../assets/logos/tailwindcss-color.svg"
import framer from "../assets/logos/framer-color.svg"
import vite from "../assets/logos/vite-color.svg"

const Header = () => {

  const [size, setSize] = useState([0]);
  const [color, setColor] = useState('#000000');

  const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

  const bgColor = useColorModeValue('custom.lightHighlightOpacity', 'custom.darkHighlightOpacity');

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
    <Flex mt='120px' w={{ base: '100%', 'xl': '48%' }} h='fit-content' align='center' direction='column'>


      <Flex w='100%' h='410px' px='30px'>


        <Flex direction='column' w='45%' h='100%' borderRadius='md' overflow='hidden' mr='40px' align='center' bg='blackAlpha.200'>
          <Text fontFamily='mono' bg={bgColor} mb='30px' p='20px' w='100%' h='fit-content' fontSize={{ base: '1.4em', 'xl': '1.4em' }} color={"blackAlpha.800"} align='center'>{'<'} <Text display='inline' color={"whiteAlpha.800"}>NahuelRetamoso</Text> {'/ >'} </Text>
          <TypeAnimation
            sequence={[`<p>Hola, soy un desarrollador frontend y este es mi portafolio. Aquí encontrarás algunos de mis proyectos en los que he utilizado las siguientes herramientas y tecnologías:</p>`]}
            cursor={false}
            speed={75}
            wrapper='span'
            style={{
              whiteSpace: 'pre-line',
              fontFamily: 'monospace',
              width: '100%',
              'padding-left': '30px',
              'padding-right': '30px',
              'padding-bottom': '10px',
              color: textColor,
              fontSize: '1.2em',
              display: 'block'
            }}
          />
          <Flex style={{
            fontFamily: 'monospace',
            width: '100%',
            'font-weight': 'bold',
            color: color,
            'padding-left': '30px',
            'padding-right': '30px',
            fontSize: '1.2em',
            display: 'block',

          }}>
            <TypeAnimation
              sequence={[5000,
                '<h2 style="font-weight:bold color:#000000">Next</h2>',
                () => setColor('#000000'),
                1500,
                '<h2 style="font-weight:bold color:#61DAFB">React</h2>',
                () => setColor('#61DAFB'),
                1500,
                '<h2 style="font-weight:bold color:#06B6D4">Tailwind</h2>',
                () => setColor('#06B6D4'),
                1500,
                '<h2 style="font-weight:bold color:#319795">Chakra</h2>',
                () => setColor('#319795'),
                1500,
                '<h2 style="font-weight:bold color:#646CFF">Vite</h2>',
                () => setColor('#646CFF'),
                1500,
                '<h2 style="font-weight:bold color:#0055FF">Framer Motion</h2>',
                () => setColor('#0055FF'),
                1500,
                '<h2 style="font-weight:bold color:#FFCA28">Firebase</h2>',
                () => setColor('#FFCA28'),
                1500,
                '<h2 style="font-weight:bold color:#F7DF1E">Javascript</h2>',
                () => setColor('#F7DF1E'),
                1500,
              ]}
              cursor={false}
              repeat={Infinity}
              speed={{type: 'keyStrokeDelayInMs', value: 100}}
              wrapper='span'
              />
          </Flex>
        </Flex>


        {size > 500 ? <Keyboard /> : null}

      </Flex>

        <Box h='80px' w='100%' pt='20px' pb='20px' mt='85px' mb='45px' bg='blackAlpha.200' borderRadius='md'>
          <Flex h='100%' w='100%'  justifyContent='space-around' px='15px'>
            <Image src={next} />
            <Image src={react} />
            <Image src={tailwind} />
            <Image src={chakra} />
            <Image src={vite} />
            <Image src={framer} />
            <Image src={firebase} />
            <Image bg='blackAlpha.800' src={javascript} />
          </Flex>
        </Box>

          <Divider borderColor={textColor} mb='50px'/>

    </Flex>
  );
}

export default Header;