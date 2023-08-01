import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Proyectos() {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        // bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={
              "https://user-images.githubusercontent.com/110426875/257066093-37c1034b-122a-4613-abf0-d5a70de7e2c9.png"
            }
            fill
            alt="Example"
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            PROFINDER
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            Proyecto Final bootcamp Henry
          </Heading>
          <Text color={"white"}>
            Profinder es una plataforma innovadora que permite a los usuarios
            prestadores de servicios publicar sus servicios y ofrecerlos dentro
            de diversas categorías en diferentes zonas de Latinoamérica. Los
            usuarios clientes pueden consultar estas publicaciones según su
            ubicación y establecer contacto directo con los prestadores de
            servicios para contratarlos.
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
