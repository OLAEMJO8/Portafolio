import React from "react";
import { HStack, Box } from "@chakra-ui/react";

function Footer() {
  return (
    <HStack color={"white"} justify="center" w="100%" height="50vh">
      <Box alignItems={"center"} justifyContent={"center"}>
        {" "}
        Maria Jose Olaechea - 2023 - Todos los derechos reservados
      </Box>
    </HStack>
  );
}

export default Footer;
