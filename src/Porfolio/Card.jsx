import { Center, Stack, Text } from "@chakra-ui/react";

export default function Card() {
  return (
    <Center>
      <Stack w="100%">
        <Text
          textTransform="uppercase"
          fontSize={{ base: "8xl", md: "10.5rem" }}
          color={"white"}
          justifyContent="center"
          textAlign="left"
          fontWeight="bold"
          fontFamily="Bebas Neue, sans-serif"
          // style={{ fontSize: "10.5rem" }}
        >
          Full Stack Developer Maria Jose Olaechea ReactJS ReduxJS Tailwind CSS
          Node.js
        </Text>
      </Stack>
    </Center>
  );
}
