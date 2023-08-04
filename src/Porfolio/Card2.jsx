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

export default function Card2() {
  const emailAddress = "olaecheamariajose@gmail.com";
  return (
    <Flex py={6} height="100vh" alignItems="center" justifyContent="center">
    <Box maxW={"1000px"} w={"100%"} mt="60px" position="relative">
        <VStack
          // spacing={4}
          // maxW="900px"
          justifyContent="center"
          alignItems="center"
          w="100%" height="100vh" 
        >
          <Avatar
            size={{ base: "6xl", md: "6xl" }}
            name="Maria Jose"
            justifyContent="center"
            alignItems="center"
            src={
              "https://media.licdn.com/dms/image/D4D03AQFyeiSskNwV-A/profile-displayphoto-shrink_200_200/0/1690857277770?e=1696464000&v=beta&t=-ruPpiWgeJwDPMYrVaNe6hTqeKUAZ5sBiFE6YPpISzg"
            }
          />
            <Heading
            as="h2"
            size="xl"
            textAlign="center"
            mb="4"
            bgClip="text"
            textTransform="uppercase"
            color={"#cf2e2e"}
            fontFamily="Bebas Neue, sans-serif"
            fontSize={{ base: "3rem", md: "4rem" }}
            lineHeight="2"
          >
            Maria Jose Olaechea
          </Heading>
{/*         
          <Text
            fontWeight={600}
            color={"black"}
            fontSize={{ base: "md", md: "xl" }}
            mb={4}
            fontFamily="Lato, sans-serif"
          >
            olaecheamariajose@gmail.com
          </Text> */}
          <Text
            fontFamily="Lato, sans-serif"
            textAlign={"center"}
            color={"white"}
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
            
              variant="outline"
              color="black"
              bg={"white"}
              _hover={{ bg: "#cf2e2e" }}
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
              variant="outline"
              color="black"
              bg={"white"}
              _hover={{ bg: "#cf2e2e" }}
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
              variant="outline"
              color="black"
              bg={"white"}
              _hover={{ bg: "#cf2e2e" }}
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
              variant="outline"
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
