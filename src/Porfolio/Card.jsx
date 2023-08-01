import {
  Avatar,
  Badge,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Card() {
  return (
    <VStack marginTop={"5"}>
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
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            variant="outline"
            color={"white"}
          >
            Linkedin
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            variant="outline"
            color={"white"}
          >
            GitHub
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            variant="outline"
            color={"white"}
          >
            Henry Talent
          </Button>
        </Stack>
      </Stack>
    </VStack>
  );
}
