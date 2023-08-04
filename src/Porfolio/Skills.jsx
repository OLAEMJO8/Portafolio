import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Divider,
  Tooltip,
  useColorModeValue,
  Text,
  Center,
  Icon,
  Flex,
} from "@chakra-ui/react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNode,
  FaDatabase,
  FaCode,
  FaFire,
} from "react-icons/fa";

import { SiTailwindcss, SiChakraui } from "react-icons/si";

function Skills() {
  const technologies = [
    { icon: FaReact, name: "React" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3, name: "CSS3" },
    { icon: FaNode, name: "Node.js" },
    { icon: FaCode, name: "Redux" },
    { icon: FaDatabase, name: "PostgreSQL" },
    { icon: SiChakraui, name: "Chakraui" },
    { icon: SiTailwindcss, name: "Tailwindcss" },
    { icon: FaFire, name: "Firebase" },
  ];

  return (
    <Flex py={6} height="100vh" alignItems="center" justifyContent="center">
    <Box maxW={"1000px"} w={"100%"} mt="60px" position="relative">
        <VStack spacing="6" lineHeight="1">
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            mb="4"
            bgClip="text"
            textTransform="uppercase"
            color={'#cf2e2e'}
            fontFamily="Bebas Neue, sans-serif"
            // fontSize={{ base: "4xl", md: "6rem" }}
            fontSize={{ base: "7xl", md: "8rem" }}
          >
            Tech Skills
          </Heading>
          <Text
            fontFamily="Lato, sans-serif"
            fontSize={{ base: "xl", md: "xl" }}
            textAlign="center"
            mb="8"
            color="white"
          >
            ReactJS || ReduxJS || Tailwind CSS || GitFlow ||
            <br />
            Node.js || Express.js || SQL || PostgreSQL || Sequelize ||
          </Text>
        </VStack>
        <br />
        <VStack spacing="6" alignItems="center">
          <HStack
            spacing={{ base: "8", md: "8" }}
            justify="center"
            flexWrap="wrap"
            maxW="900px"
            w="100%"
            height="40vh"
            lineHeight="1"
          >
            {technologies.map(({ icon: IconComponent, name }) => (
              <Tooltip key={name} label={name}>
                <Box
                  as="button"
                  _hover={{ transform: "scale(1.1)" }}
                  w={{ base: "20%", sm: "15%", md: "10%" }}
                >
                  <Icon
                    as={IconComponent}
                    boxSize={{ base: "80px", sm: "80px", md: "90px" }}
                    color="white"
                  />
                </Box>
              </Tooltip>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}

export default Skills;
