import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import fondo from "../Fondo/fondo1.png";

export default function Card2() {
  const emailAddress = "olaecheamariajose@gmail.com";
  const gradientBackground = {
    backgroundImage: `linear-gradient(to bottom, rgba(22, 33, 46, 0.5), rgba(22, 33, 46, 1)), url(${fondo})`,
    backgroundSize: "cover",
    py: 6,
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", 
  };
  return (
    <Flex {...gradientBackground}>
      <Box maxW={"1000px"} w={"100%"} mt="60px" position="relative">
        <VStack
          // spacing={4}
          // maxW="900px"
          justifyContent="center"
          alignItems="center"
          w="100%"
          height="100vh"
        >
          <Avatar
            size={{ base: "6xl", md: "6xl" }}
            name="Maria Jose"
            justifyContent="center"
            alignItems="center"
            src={
              "https://media.licdn.com/dms/image/D4D03AQFyeiSskNwV-A/profile-displayphoto-shrink_200_200/0/1690857277770?e=1696464000&v=beta&t=-ruPpiWgeJwDPMYrVaNe6hTqeKUAZ5sBiFE6YPpISzg"
            }
            mb="20px"
          />
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            mb="4"
            bgClip="text"
            textTransform="uppercase"
            color="white"
            // color={"#8f889c"}
            fontFamily="Bebas Neue, sans-serif"
            fontSize={{ base: "3rem", md: "4rem" }}
            lineHeight="1"
          >
            Maria Jose Olaechea
          </Heading>

          <Text
            fontFamily="Lato, sans-serif"
            textAlign={"center"}
            color="white"
            fontSize={{ base: "2xl", md: "2xl" }}
          >
            Full-Stack Developer || ReactJS || ReduxJS || Tailwind CSS ||
            Node.js || Express.js || SQL || PostgreSQL || Sequelize
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={{ base: "column", md: "row" }}
            padding={2}
            justifyContent={"space-between"}
            // alignItems={{ base: "center", md: "flex-start" }}
            flex-flexDirection={"row"}
          >
            <Button
              flex={{ base: "row", md: "1" }}
              fontFamily="Lato, sans-serif"
              fontSize={{ base: "lg", md: "md" }}
              // rounded={'3xl'}

              // variant="outline"
              color="black"
              bg={"white"}
              _hover={{ bg: "#8f889c" }}
              as="a"
              target="_blank"
              onClick={() => (window.location.href = `mailto:${emailAddress}`)}
            >
              Email
            </Button>

            <Button
              as="a"
              href="https://www.linkedin.com/in/mjolaechea/"
              target="_blank"
              flex={{ base: "row", md: "1" }}
              fontSize={{ base: "md", md: "md" }}
              // rounded={"full"}
              // variant="outline"
              color="black"
              bg={"white"}
              _hover={{ bg: "#8f889c" }}
              mt={{ base: 4, md: 0 }}
              fontFamily="Lato, sans-serif"
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href="https://github.com/OLAEMJO8"
              target="_blank"
              flex={{ base: "row", md: "1" }}
              fontSize={{ base: "md", md: "md" }}
              // rounded={"full"}
              // variant="outline"
              color="black"
              bg={"white"}
              _hover={{ bg: "#8f889c" }}
              fontFamily="Lato, sans-serif"
              mt={{ base: 4, md: 0 }}
            >
              GitHub
            </Button>
            {/* <Button
              as="a"
              href="https://www.soyhenry.com/"
              target="_blank"
              flex={1}
              fontSize={{ base: "sm", md: "md" }}
              rounded={"full"}
              // variant="outline"
              color={"white"}
              mt={{ base: 4, md: 0 }}
              fontFamily="Lato, sans-serif"
            >
              Henry
            </Button> */}
          </Stack>
        </VStack>
      </Box>
    </Flex>
  );
}
