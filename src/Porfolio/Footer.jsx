import React from "react";
import { Stack, Box } from "@chakra-ui/react";

function Footer() {
  return (

    <Stack color={"white"} alignItems={"center"}  justifyContent="center" w="100%" height="80vh" spacing={8}>
      <Box alignItems={"center"} justifyContent={"center"}>
        {" "}
        Maria Jose Olaechea - 2023 - Todos los derechos reservados
      </Box>
    </Stack>
  );
}

export default Footer;
