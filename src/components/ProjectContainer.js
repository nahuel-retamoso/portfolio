import { Flex, Grid, Text, Divider, useColorModeValue } from "@chakra-ui/react";
import Project from "./Project";
import scroll from "../assets/projects/scroll.png";
import movieNotes from "../assets/projects/movie-notes.png"
import ramenLab from "../assets/projects/ramen-lab.png"
import ecommerce from "../assets/projects/ecommerce.png"
import cncWebsite from "../assets/projects/cncwebsite.png"
import ecommerceRopa from "../assets/projects/ecommerce-ropa.png"
import chart from "../assets/projects/chart.png"
import chat from "../assets/projects/chat.png"

const ProjectContainer = () => {

    const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

    return (
        <Flex direction='column' mt='3%' w={{ base: '90%', 'xl': '48%' }} h={{ base: 'fit-content', 'xl': 'fit-content' }} align='center'>
            <Divider borderColor={textColor} />
            <Text color='whiteAlpha.900' mt='45' mb='5%' p='0.5%' bgColor='blackAlpha.300' >Mira lo que he estado haciendo ㋡</Text>
            <Grid w='93%' h='100%' templateColumns={{ base: 'repeat(1, 1fr)', 'xl': "repeat(2, 1fr)" }} gap={10}>

                <Project title='Ecommerce' description='Ecommerce hecho con React, Tailwind, Firebase y EmailJS' source='https://github.com/nahuel-retamoso/Ecommerce' website='https://ecommerce-kappa-wine.vercel.app/' image={ecommerceRopa} />

                <Project title='Movie Notes' description='Te permite crear notas y comentarios sobre películas y series, y agregar etiquetas para una fácil búsqueda en el futuro. ' source='https://github.com/nahuel-retamoso/MovieNotes' website='https://movie-notes.vercel.app/signin' image={movieNotes} />
                <Project title='CNC website' description='Website hecho con NextJs, Tailwind y Framer Motion' source='https://github.com/nahuel-retamoso/CNCWebsite' website='https://cnc-website.vercel.app/' image={cncWebsite} />

                <Project title='Ramen Lab' description='Website para un restaurante con sistema de reserva y email de confirmacion, hecho con React, Firebase, Material-UI y Emailjs' source='https://github.com/nahuel-retamoso/ramen-lab' website='https://ramen-lab.vercel.app/' image={ramenLab} />

                <Project title='Celluloid' description='Ecommerce hecho para el curso de React de Coderhouse' source='https://github.com/nahuel-retamoso/celluloid-retamoso' website='https://celluloid-ecommerce.vercel.app' image={ecommerce} />

                <Project title='Charts' description='Ingresa valores mediante inputs y lo grafica usando Recharts' source='https://github.com/nahuel-retamoso/Project-Chart/tree/main' website='https://project-chart.vercel.app/' image={chart} />
                
                <Project title='Scroll to component' description='Ejemplo de como hacer un scroll en react' source='https://github.com/nahuel-retamoso/scroll-to-component' website='https://scroll-to-component.vercel.app/' image={scroll} />

                <Project title='Chat' description='Chat hecho con React y ChakraUI en el frontend y Socket.io en el backend con Node' source='https://github.com/nahuel-retamoso/chat-frontend' website='https://chat-xi-sand.vercel.app/' image={chat} />

            </Grid>
        </Flex>
    );
}

export default ProjectContainer;