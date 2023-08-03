import { Center, Stack, Text } from "@chakra-ui/react";

export default function Card() {
  return (
    <Center>
      <Stack w="100%" height="100vh" mt="60px">
        <Text
          textTransform="uppercase"
          // fontSize={{ base: "md", md: "3.75rem" }}
          fontSize={{ base: "6rem", md: "9rem" }}
          color={"white"}
          justifyContent="center"
          textAlign="left"
          fontWeight="bold"
          fontFamily="Bebas Neue, sans-serif"
          lineHeight="1"
          spacing="7"
          // style={{ fontSize: "10.5rem" }}
        >
          Full Stack Developer Maria Jose Olaechea ReactJS ReduxJS Tailwind CSS
          Node.js
        </Text>
      </Stack>
    </Center>
  );
}
