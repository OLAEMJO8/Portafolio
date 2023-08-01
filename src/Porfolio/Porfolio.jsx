import React, { useState } from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa"; // Importa el icono de flecha hacia arriba
import fondo from "../Fondo/fondo2.png";

import Card from "./Card";
import Proyectos from "./Proyectos";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";

const Porfolio = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

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
      <Box>
        <Proyectos />
      </Box>
      {showScroll && (
        <IconButton
          icon={<FaArrowCircleUp />}
          onClick={scrollTop}
          size="lg"
          colorScheme="white"
          position="fixed"
          bottom="40px"
          right="40px"
          zIndex="999"
        />
      )}
    </Box>
  );
};

export default Porfolio;
