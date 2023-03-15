import { Flex, Grid, Text, Divider } from "@chakra-ui/react";
import Project from "./Project";

const ProjectContainer = () => {
    return (
        <Flex direction='column' mt='3%' w={{base:'90%', 'xl': '48%'}} h={{base: 'fit-content', 'xl': 'fit-content'}} align='center'>
            <Divider />
            <Text color='whiteAlpha.900' mt='45' mb='5%' p='0.5%' bgColor='blackAlpha.300' >Take a look at my work ㋡</Text>
            <Grid w='93%' h='100%' templateColumns={{base: 'repeat(1, 1fr)', 'xl': "repeat(2, 1fr)"}} gap={10}>

                <Project title='Scroll to component' description='Scroll example in react' source='https://github.com/nahuel-retamoso/scroll-to-component' website='https://scroll-to-component.vercel.app/' image='./scroll.png' />

                <Project title='Movie Notes' description='A notes app to save movies and series. You can organize your notes using tags.' source='https://github.com/nahuel-retamoso/MovieNotes' website='https://movie-notes.vercel.app/signin' image='./movie-notes.png' />

                <Project title='Ramen Lab' description='A restaurant website with reservation system' source='https://github.com/nahuel-retamoso/ramen-lab' website='https://ramen-lab.vercel.app/' image='./ramen-lab.png' />

                <Project title='Celluloid' description='Rolls camera ecommerce website made with React' source='https://github.com/nahuel-retamoso/celluloid-retamoso' website='https://celluloid-ecommerce.vercel.app' image='./ecommerce.png' />

                <Project title='CNC website' description='CNC website build with Next Js, Tailwind and Framer Motion' source='https://github.com/nahuel-retamoso/CNCWebsite' website='https://cnc-website.vercel.app/' image='./cncwebsite.png' />
                
            </Grid>
        </Flex>
    );
}

export default ProjectContainer;