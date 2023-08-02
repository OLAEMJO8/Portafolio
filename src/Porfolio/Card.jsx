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
      <Box w="100%"  maxW="2000px">
        <VStack>
          <Text
            textTransform="uppercase"
            fontSize={{ base: "7xl", md: "9xl" }}
            color={"white"}
            justifyContent="center"
            textAlign="match-parent"
            fontWeight="bold"
            fontFamily="Lato, sans-serif"
          >
            Full Stack Developer Maria Jose Olaechea ReactJS ReduxJS Tailwind
            CSS Node.js 
          </Text>
        </VStack>
      </Box>
    </Center>
  );
}
