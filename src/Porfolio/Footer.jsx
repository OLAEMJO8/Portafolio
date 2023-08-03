import React from "react";
import { useColorModeValue, HStack, Box } from "@chakra-ui/react";

function Footer() {
  return (
    <HStack color={"white"} py="4" px="8" spacing="4" justify="center">
      <Box alignItems={"center"} justifyContent={"center"}>
        {" "}
        Maria Jose Olaechea - 2023 - Todos los derechos reservados
      </Box>
    </HStack>
  );
}

export default Footer;
