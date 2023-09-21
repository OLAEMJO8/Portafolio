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
    <Flex py={6} alignItems="center" justifyContent="center">
      <Box maxW={"1000px"} w={"100%"} mt="60px" position="relative">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        <Link
            as="a"
            href="https://github.com/OLAEMJO8/primervue.git"
            target="_blank"
          >
            <Box
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
              h={{ base: "450px", md: "600px" }}


            >
              <Box
                h={{ base: "150px", md: "200px" }}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                 
                  src={
                    "https://github.com/OLAEMJO8/Portafolio/blob/main/vue.png?raw=true"
                  }
                  alt="Example"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Stack justifyContent="center"  >
                <Text
                  color={"#1a7557"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing={1.1}
                  fontFamily="Rotobo, sans-serif"
                >
                 CONTADOR VUE.JS
                </Text>

                <Text
                  fontFamily="Lato, sans-serif"
                  color={"white"}
                  fontSize={{ base: "sm", md: "md" }}

                >

                 Aprendiendo Vue.js, el ciclo de vida de un componente, estados,eventos, directivas, componentes, rutas, etc.

                </Text>
              </Stack>
            </Box>
          </Link>
          <Link
            as="a"
            href="https://github.com/OLAEMJO8/prueba_tecnica.git"
            target="_blank"
          >
            <Box
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
              h={{ base: "450px", md: "600px" }}


            >
              <Box
                h={{ base: "150px", md: "200px" }}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  // bg={"pink.50"}
                  src={
                    "https://github.com/OLAEMJO8/Portafolio/blob/main/Captura.PNG?raw=true"
                  }
                  alt="Example"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Stack justifyContent="center"  >
                <Text
                  color={"#1a7557"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing={1.1}
                  fontFamily="Rotobo, sans-serif"
                >
                  PRUEBA TECNICA
                </Text>

                <Text
                  fontFamily="Lato, sans-serif"
                  color={"white"}
                  fontSize={{ base: "sm", md: "md" }}

                >

                  El objetivo de la siguiente prueba fue medir la capacidad de análisis, y competencias de desarrollo de
                  software y experiencia de usuario utilizando React y TailwindCss para estilado. Desarrolle el backend de la solución en forma de un API REST utilizando Node.


                  <br />
                  En esta opotunidad aprendi a usar por primera vez JSON Web Token (JWT) · Tailwind CSS · bcrypt · nodemailer.
                </Text>
              </Stack>
            </Box>
          </Link>
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
              h={{ base: "450px", md: "600px" }}


            >
              <Box
                h={{ base: "150px", md: "200px" }}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  // bg={"pink.50"}
                  src={
                    "https://github.com/OLAEMJO8/Portafolio/raw/main/image.png"
                  }
                  alt="Example"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Stack justifyContent="center"  >
                <Text
                  color={"#1a7557"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing={1.1}
                  fontFamily="Rotobo, sans-serif"
                >
                  PORTAFOLIO
                </Text>

                <Text
                  fontFamily="Lato, sans-serif"
                  color={"white"}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Este portafolio cuenta un poco de mi, mis skills, mis
                  proyectos y podras ver un poco de mi ultimo trabajo
                  actualmente.
                  <br />
                  Si estás buscando una desarrolladora apasionada, proactiva y
                  con ganas de seguir aprendiendo, ¡no dudes en conectarte
                  conmigo!
                </Text>
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
              h={{ base: "450px", md: "600px" }}

            >
              <Box
                h={{ base: "150px", md: "200px" }}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  // bg={"pink.50"}
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
                  color={"#1a7557"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontFamily="Rotobo, sans-serif"
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing={1.1}
                >
                  PROFINDER
                </Text>

                <Text
                  color={"white"}
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
                </Text>
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
              h={{ base: "450px", md: "600px" }}

            >
              <Box
                h={{ base: "150px", md: "200px" }}
                bg={"white.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  // bg={"pink.50"}
                  src={"https://github.com/OLAEMJO8/drivers/raw/main/F1.svg"}
                  alt="Example"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Stack justifyContent="center" >
                <Text
                  color={"#1a7557"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing={1.1}
                  fontFamily="Rotobo, sans-serif"
                >
                  Drivers
                </Text>

                <Text color={"white"} fontSize={{ base: "sm", md: "md" }}>
                  Proyecto Individual bootcamp Henry. Visualización de cards de corredores, con la posibilidad de
                  filtrar, ordenarlos, buscar uno en específico a través de la
                  barra de búsqueda y se podrá crear un nuevo corredor a través
                  de un formulario.
                  <br />
                  Creada usando JavaScript, CSS, React, Redux, PostgreSQL,
                  Express, Sequelize.
                </Text>
              </Stack>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
