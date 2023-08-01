import {
  Avatar,
  Badge,
  Button,
  Center,
  Container,
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
    <VStack >
      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={1}
        pt={2}
      >
        <Heading fontSize={"6xl"} fontFamily={"body"} color={"white"}>
          <Text textTransform="uppercase">Full Stack Developer</Text>
        </Heading>
        <Avatar
          // borderRadius={"lg"}

          size="2xl"
          name="Maria Jose"
          justifyContent="center"
          alignItems="center"
          src={
            "https://media.licdn.com/dms/image/D4D03AQFyeiSskNwV-A/profile-displayphoto-shrink_200_200/0/1690857277770?e=1696464000&v=beta&t=-ruPpiWgeJwDPMYrVaNe6hTqeKUAZ5sBiFE6YPpISzg"
          }
        />
        <Heading fontSize={"2xl"} fontFamily={"body"} color={"white"}>
          Maria Jose Olaechea
        </Heading>
        <Text fontWeight={600} color={"white"} size="sm" mb={4}>
          olaecheamariajose@gmail.com
        </Text>
        <Text textAlign={"center"} color={"white"} px={3}>
          Full-Stack Developer || ReactJS || ReduxJS || Tailwind CSS || Node.js
          || Express.js || SQL || PostgreSQL || Sequelize
        </Text>

        <Stack
          width={"100%"}
          mt={"2rem"}
          direction={"row"}
          padding={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            flex={1}
            fontSize={"sm"}
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
            fontSize={"sm"}
            rounded={"full"}
            variant="outline"
            color={"white"}
          >
            LinkedIn
          </Button>
          <Button
            as="a"
            href="https://github.com/OLAEMJO8"
            target="_blank"
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            variant="outline"
            color={"white"}
          >
            GitHub
          </Button>
          <Button
            as="a"
            href="https://www.soyhenry.com/"
            target="_blank"
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            variant="outline"
            color={"white"}
          >
            Henry
          </Button>
        </Stack>
      </Stack>
    </VStack>
  );
}
