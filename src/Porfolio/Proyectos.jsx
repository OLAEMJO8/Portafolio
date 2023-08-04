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
  SimpleGrid,
  Link,
  Flex,
} from "@chakra-ui/react";

export default function Proyectos() {
  return (
    <Flex py={6} height="100vh" alignItems="center" justifyContent="center">
      <Box maxW={"1000px"} w={"100%"} mt="60px" position="relative">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
          <Link
            as="a"
            href="https://github.com/OLAEMJO8/Portafolio"
            target="_blank"
          >
            <Box
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
              h={{ base: "300px", md: "400px" }}
            >
              <Box
                h={{ base: "150px", md: "200px" }}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  bg={"pink.50"}
                  src={
                    "https://github.com/OLAEMJO8/Portafolio/raw/main/image.png"
                  }
                  alt="Example"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Stack justifyContent="center" >
                <Text
                  color={"#cf2e2e"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing={1.1}
                  fontFamily="Rotobo, sans-serif"
                >
                  PORTAFOLIO
                </Text>
                <Heading
                  color={"black"}
                  fontSize={{ base: "md", md: "lg" }}
                  fontFamily="Lato, sans-serif"
                >
                  Portafolio personal
                </Heading>
                {/* <Text
                  fontFamily="Lato, sans-serif"
                  color={"black"}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Este portafolio cuenta un poco de mi, mis skills, mis
                  proyectos y podras ver un poco de mi ultimo trabajo
                  actualmente.
                  <br />
                  Si estás buscando una desarrolladora apasionada, proactiva y
                  con ganas de seguir aprendiendo, ¡no dudes en conectarte
                  conmigo!
                </Text> */}
              </Stack>
            </Box>
          </Link>
          <Link
            as="a"
            href="https://github.com/OLAEMJO8/Profinder"
            target="_blank"
          >
            <Box
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
              h={{ base: "300px", md: "400px" }}
            >
              <Box
                h={{ base: "150px", md: "200px" }}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  bg={"pink.50"}
                  src={
                    "https://user-images.githubusercontent.com/110426875/257066093-37c1034b-122a-4613-abf0-d5a70de7e2c9.png"
                  }
                  alt="Example"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Stack justifyContent="center" >
                <Text
                  color={"#cf2e2e"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontFamily="Rotobo, sans-serif"
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing={1.1}
                >
                  PROFINDER
                </Text>
                <Heading
                  color={"black"}
                  fontSize={{ base: "md", md: "lg" }}
                  fontFamily="Lato, sans-serif"
                >
                  Proyecto Final bootcamp Henry
                </Heading>
                {/* <Text
                  color={"black"}
                  fontFamily="Lato, sans-serif"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Profinder es una plataforma innovadora que permite a los
                  usuarios prestadores de servicios publicar sus servicios y
                  ofrecerlos dentro de diversas categorías en diferentes zonas
                  de Latinoamérica.
                  <br />
                  Los usuarios clientes pueden consultar estas publicaciones
                  según su ubicación y establecer contacto directo con los
                  prestadores de servicios para contratarlos.
                </Text> */}
              </Stack>
            </Box>
          </Link>

          <Link
            as="a"
            href="https://github.com/OLAEMJO8/drivers"
            target="_blank"
          >
            <Box
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
              h={{ base: "300px", md: "400px" }}
            >
              <Box
                h={{ base: "150px", md: "200px" }}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  bg={"pink.50"}
                  src={"https://github.com/OLAEMJO8/drivers/raw/main/F1.svg"}
                  alt="Example"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Stack justifyContent="center" >
                <Text
                  color={"#cf2e2e"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing={1.1}
                  fontFamily="Rotobo, sans-serif"
                >
                  Drivers
                </Text>
                <Heading
                  color={"black"}
                  fontSize={{ base: "md", md: "lg" }}
                  fontFamily="Lato, sans-serif"
                >
                  Proyecto Individual bootcamp Henry
                </Heading>
                {/* <Text color={"black"} fontSize={{ base: "sm", md: "md" }}>
                  Visualización de cards de corredores, con la posibilidad de
                  filtrar, ordenarlos, buscar uno en específico a través de la
                  barra de búsqueda y se podrá crear un nuevo corredor a través
                  de un formulario.
                  <br />
                  Creada usando JavaScript, CSS, React, Redux, PostgreSQL,
                  Express, Sequelize.
                </Text> */}
              </Stack>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
