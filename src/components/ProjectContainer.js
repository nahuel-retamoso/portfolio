import { Flex, Grid, Text, Divider, useColorModeValue } from "@chakra-ui/react";
import Project from "./Project";
import scroll from "../assets/projects/scroll.png";
import movieNotes from "../assets/projects/movie-notes.png"
import ramenLab from "../assets/projects/ramen-lab.png"
import ecommerce from "../assets/projects/ecommerce.png"
import cncWebsite from "../assets/projects/cncwebsite.png"

const ProjectContainer = () => {

    const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

    return (
        <Flex direction='column' mt='3%' w={{base:'90%', 'xl': '48%'}} h={{base: 'fit-content', 'xl': 'fit-content'}} align='center'>
            <Divider borderColor={textColor} />
            <Text color='whiteAlpha.900' mt='45' mb='5%' p='0.5%' bgColor='blackAlpha.300' >Mira lo que he estado haciendo ㋡</Text>
            <Grid w='93%' h='100%' templateColumns={{base: 'repeat(1, 1fr)', 'xl': "repeat(2, 1fr)"}} gap={10}>

                <Project title='Scroll to component' description='Ejemplo de como hacer un scroll en react' source='https://github.com/nahuel-retamoso/scroll-to-component' website='https://scroll-to-component.vercel.app/' image={scroll} />

                <Project title='Movie Notes' description='Te permite crear notas y comentarios sobre películas y series, y agregar etiquetas para una fácil búsqueda en el futuro. ' source='https://github.com/nahuel-retamoso/MovieNotes' website='https://movie-notes.vercel.app/signin' image={movieNotes} />

                <Project title='Ramen Lab' description='Website para un restaurante con sistema de reserva' source='https://github.com/nahuel-retamoso/ramen-lab' website='https://ramen-lab.vercel.app/' image={ramenLab} />

                <Project title='Celluloid' description='Ecommerce hecho para el curso de React de Coderhouse' source='https://github.com/nahuel-retamoso/celluloid-retamoso' website='https://celluloid-ecommerce.vercel.app' image={ecommerce} />

                <Project title='CNC website' description='Website hecho con NextJs, Tailwind y Framer Motion' source='https://github.com/nahuel-retamoso/CNCWebsite' website='https://cnc-website.vercel.app/' image={cncWebsite} />
                
            </Grid>
        </Flex>
    );
}

export default ProjectContainer;