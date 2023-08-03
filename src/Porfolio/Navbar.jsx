import React from "react";
import { Box, Flex, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = ({
  scrollToContact,
  scrollToTechSkills,
  scrollToSoftSkills,
  scrollToProyectos,
}) => {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems="center" justifyContent="center">
          <Stack direction="row" spacing={3}>
            <Button
              onClick={scrollToContact}
              variant="outline"
              color={"white"}
              _hover={{ bg: "teal.500" }}
            >
              Contacto
            </Button>
            <Button
              onClick={scrollToTechSkills}
              variant="outline"
              color={"white"}
              _hover={{ bg: "teal.500" }}
            >
              Tech Skills
            </Button>
            <Button
              onClick={scrollToSoftSkills}
              variant="outline"
              color={"white"}
              _hover={{ bg: "teal.500" }}
            >
              Soft Skills
            </Button>
            <Button
              onClick={scrollToProyectos}
              variant="outline"
              color={"white"}
              _hover={{ bg: "teal.500" }}
            >
              Proyectos
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
