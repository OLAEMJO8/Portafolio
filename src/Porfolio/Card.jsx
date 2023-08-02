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
  return (
    <Center>
      <Box w="90%">
        <VStack>
          <Text
            textTransform="uppercase"
            fontSize={{ base: "7xl", md: "8xl" }}
            color={"white"}
            // justifyContent="center"
            textAlign='left'
            fontWeight="bold"
            fontFamily="Lato, sans-serif"
          >
            Full Stack Developer Maria Jose Olaechea ReactJS ReduxJS Tailwind
            CSS Node.js Express PostgreSQL
          </Text>
        </VStack>
      </Box>
    </Center>
  );
}
