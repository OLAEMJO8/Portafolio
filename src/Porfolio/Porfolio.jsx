import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import fondo from "../Fondo/fondo2.png";

import Card from "./Card";
import Proyectos from "./Proyectos";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";

const Porfolio = () => {
  return (
    <Box
      backgroundImage={`url(${fondo})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
      display="flex"
      flexDirection="column"
    >
   
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"  
      >
     
        <Card />
      </Box>
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"  
        width="100vw" 
        maxWidth="100%"  
        marginTop="15px"  
      >
        <Skills />
      </Box>
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"  
        width="100vw" 
        maxWidth="100%"  
        marginTop="15px"  
      >
        <SoftSkills />
      </Box>
    
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"  
        width="100vw" 
        maxWidth="100%"  
        marginTop="15px"  
      >
        <Proyectos />
      </Box>
    </Box>
  );
};

export default Porfolio;
