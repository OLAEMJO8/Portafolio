import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

export default function Proyectos() {
  return (
    <Center py={6}>
      <Box maxW={"300px"} w={"full"}>
      <Divider mb="4" maxW="50%" mx="auto" />
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb="4"
          bgClip="text"
          textTransform="uppercase"
          color={"white"}
        >
          Proyectos
        </Heading>
        <Box
          maxW={"400px"} 
          w={"full"}
      
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          marginTop={5}
        >
          <Box
            h={"150px"} 
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
              fontSize={"xl"}
              fontFamily={"body"}
            >
              Proyecto Final bootcamp Henry
            </Heading>
            <Text color={"white"} fontSize={"sm"}>
              {" "}
              {/* Ajustar el tamaño de la fuente del texto */}
              Profinder es una plataforma innovadora que permite a los usuarios
              prestadores de servicios publicar sus servicios y ofrecerlos
              dentro de diversas categorías en diferentes zonas de
              Latinoamérica. Los usuarios clientes pueden consultar estas
              publicaciones según su ubicación y establecer contacto directo con
              los prestadores de servicios para contratarlos.
            </Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
