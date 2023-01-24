import { ChakraProvider, Flex } from "@chakra-ui/react"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import Navbar from './components/Navbar';
import ProjectContainer from "./components/ProjectContainer";

function App() {
  return (
    <ChakraProvider>
      <Flex w='100%' direction='column' align='center' bgColor='blue.800' >
        <Navbar />
        <Title />
        <Header />
        <Contact />
        <ProjectContainer />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
