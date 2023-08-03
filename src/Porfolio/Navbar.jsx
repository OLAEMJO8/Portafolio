import React from "react";
import { Box, Flex, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = ({ scrollToContact, scrollToTechSkills, scrollToSoftSkills, scrollToProyectos }) => {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems="center" justifyContent="center">
          <Stack direction="row" spacing={3}>
            <Button onClick={scrollToContact}   _hover={{ bg: "teal.500" }}>Contacto</Button>
            <Button onClick={scrollToTechSkills}   _hover={{ bg: "teal.500" }}>Tech Skills</Button>
            <Button onClick={scrollToSoftSkills}   _hover={{ bg: "teal.500" }}>Soft Skills</Button>
            <Button onClick={scrollToProyectos}   _hover={{ bg: "teal.500" }}>Proyectos</Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
