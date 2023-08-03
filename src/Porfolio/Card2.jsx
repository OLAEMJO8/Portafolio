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
           <Text
            textTransform="uppercase"
            // fontSize={{ base: "md", md: "3.75rem" }}
            fontSize={{ base: "4rem", md: "6rem" }}
            color={"white"}
            justifyContent="center"
            textAlign="center"
            // fontWeight="bold"
            fontFamily="Bebas Neue, sans-serif"
            lineHeight="1"
            spacing="7"
            // style={{ fontSize: "10.5rem" }}
          >
            Maria Jose Olaechea
          </Text>
          {/* <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            color={"white"}
            fontFamily="Lato, sans-serif"
          >
            Maria Jose Olaechea
          </Text> */}
          {/* <Text
            fontWeight={600}
            color={"white"}
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
              color={"white"}
              as="a"
              target="_blank"
              onClick={() => (window.location.href = `mailto:${emailAddress}`)}
              _hover={{ bg: "teal.500" }}
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
              color={"white"}
              mt={{ base: 4, md: 0 }}
              fontFamily="Lato, sans-serif"
              _hover={{ bg: "teal.500" }}
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
              color={"white"}
              fontFamily="Lato, sans-serif"
              mt={{ base: 4, md: 0 }}
              _hover={{ bg: "teal.500" }}
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
