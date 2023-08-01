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
  useColorModeValue,
} from "@chakra-ui/react";

export default function Card() {
  const emailAddress = "olaecheamariajose@gmail.com";
  return (
    <Center py="8">
      <Box maxW="900px" w="100%">
        <VStack
          spacing={4}
          maxW="900px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            fontSize={{ base: "4xl", md: "7xl" }}
            color={"white"}
            justifyContent="center"
            alignItems="center"
          >
            <Text textTransform="uppercase">Full Stack Developer</Text>
          </Heading>
          <Avatar
            size={{ base: "lg", md: "2xl" }}
            name="Maria Jose"
            justifyContent="center"
            alignItems="center"
            src={
              "https://media.licdn.com/dms/image/D4D03AQFyeiSskNwV-A/profile-displayphoto-shrink_200_200/0/1690857277770?e=1696464000&v=beta&t=-ruPpiWgeJwDPMYrVaNe6hTqeKUAZ5sBiFE6YPpISzg"
            }
          />
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontFamily={"body"}
            color={"white"}
          >
            Maria Jose Olaechea
          </Heading>
          <Text
            fontWeight={600}
            color={"white"}
            fontSize={{ base: "sm", md: "md" }}
            mb={4}
          >
            olaecheamariajose@gmail.com
          </Text>
          <Text textAlign={"center"} color={"white"} px={{ base: 3, md: 6 }}>
            Full-Stack Developer || ReactJS || ReduxJS || Tailwind CSS ||
            Node.js || Express.js || SQL || PostgreSQL || Sequelize
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={{ base: "column", md: "row" }}
            padding={2}
            justifyContent={"space-between"}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Button
              flex={1}
              fontSize={{ base: "sm", md: "md" }}
              rounded={"full"}
              variant="outline"
              color={"white"}
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
              flex={1}
              fontSize={{ base: "sm", md: "md" }}
              rounded={"full"}
              variant="outline"
              color={"white"}
              mt={{ base: 4, md: 0 }}
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href="https://github.com/OLAEMJO8"
              target="_blank"
              flex={1}
              fontSize={{ base: "sm", md: "md" }}
              rounded={"full"}
              variant="outline"
              color={"white"}
              mt={{ base: 4, md: 0 }}
            >
              GitHub
            </Button>
            <Button
              as="a"
              href="https://www.soyhenry.com/"
              target="_blank"
              flex={1}
              fontSize={{ base: "sm", md: "md" }}
              rounded={"full"}
              variant="outline"
              color={"white"}
              mt={{ base: 4, md: 0 }}
            >
              Henry
            </Button>
          </Stack>
        </VStack>
      </Box>
    </Center>
  );
}
