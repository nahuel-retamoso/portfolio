import { Flex, useColorModeValue } from "@chakra-ui/react"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import ProjectContainer from "./components/ProjectContainer";

function App() {

  const bgColor = useColorModeValue('custom.bgLight', 'custom.bgDark');

  return (
    <Flex w='100%' direction='column' align='center' bgColor={bgColor} >
      <Navbar />
      <Header />
      <Contact />
      <ProjectContainer />
      <Footer />
    </Flex>
  );
}

export default App;
