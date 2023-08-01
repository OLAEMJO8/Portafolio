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
      py={{ base: 4, md: 10 }}
    >
      <Box marginTop={10}>
        <Card />
      </Box>
      <Box marginTop={10}>
        <Skills />
      </Box>
      <Box marginTop={10}>
        <SoftSkills />
      </Box>
      <Box marginTop={10}>
        <Proyectos />
      </Box>
    </Box>
  );
};

export default Porfolio;
