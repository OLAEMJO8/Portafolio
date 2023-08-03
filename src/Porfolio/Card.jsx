import { Box, Center, Stack, Text } from "@chakra-ui/react";

export default function Card() {
  return (
    <Center>
      <Box maxW="2000px" w="100%" mt="60px" spacing="6" position='static'>
        <Stack spacing="6">
          <Text
            textTransform="uppercase"
            // fontSize={{ base: "md", md: "3.75rem" }}
            fontSize={{ base: "6rem", md: "11.5rem" }}
            color={"white"}
            justifyContent="center"
            textAlign="left"
            fontWeight="bold"
            fontFamily="Bebas Neue, sans-serif"
            lineHeight="1"
            spacing="7"
            // style={{ fontSize: "10.5rem" }}
          >
            Full Stack Developer Maria Jose Olaechea ReactJS ReduxJS Tailwind
            CSS Node.js
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
