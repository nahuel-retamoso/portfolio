import { Flex, Grid, Text, Divider } from "@chakra-ui/react";
import Project from "./Project";

const ProjectContainer = () => {
    return (
        <Flex direction='column' mt='3%' w='48%' h='110vh' align='center'>
            <Divider />
            <Text color='whiteAlpha.900' mt='45' mb='5%' p='0.5%' bgColor='blackAlpha.300' >Take a look at my work ㋡</Text>
            <Grid w='93%' h='100%' templateColumns="repeat(2, 1fr)" gap={6}>

                <Project title='Celloluid' description='Rolls camera ecommerce website made with React' source='https://github.com/nahuel-retamoso/celluloid-retamoso' website='google.com' image='./ecommerce.png' />

                <Project title='Movie Notes' description='A note app only for movies and series, register what you saw and make list' source='https://github.com/nahuel-retamoso/MovieNotes' website='https://movie-notes.vercel.app/signin' image='./movie-notes.png' />

                <Project title='Ramen Lab' description='A restaurant website with booking system' source='https://github.com/nahuel-retamoso/ramen-lab' website='https://ramen-lab.vercel.app/' image='./ramen-lab.png' />

                <Project title='Celluloid' description='Rolls camera ecommerce website made with React' source='https://github.com/nahuel-retamoso/celluloid-retamoso' website='https://celluloid-ecommerce.vercel.app' image='./ecommerce.png' />
                
            </Grid>
        </Flex>
    );
}

export default ProjectContainer;