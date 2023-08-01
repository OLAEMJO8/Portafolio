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
} from "@chakra-ui/react";

import { FaReact, FaJs, FaHtml5, FaCss3, FaNode, FaDatabase, FaCode, FaFire, FaGithub } from "react-icons/fa";

import { SiTailwindcss , SiChakraui} from "react-icons/si";
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
    { icon: FaGithub, name: "GitHub" },
    { icon: FaFire, name: "Firebase" },
  ];

  return (
    <Center py="8">
      <Box maxW="800px" w="100%">
        <Divider mb="4" maxW="50%" mx="auto" />
        <VStack spacing="4">
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            mb="4"
            bgClip="text"
            textTransform="uppercase"
            color={"white"}
          >
            Tech Skills
          </Heading>
          <Text textAlign="center" mb="8">
            HTML, CSS y JavaScript, React JS, Vue JS, Express JS, Redux, Redux
            Toolkit, Node.js, Firebase, Bootstrap, Chakra UI, NodeJS, SQL
            (PostgreSQL).
            <br />
            Control de versiones: Git, GitHub, gitflow.
          </Text>
        </VStack>
        <br />
        <VStack spacing="8" alignItems="center">
          <HStack spacing={{ base: "8", md: "24" }} flexWrap="wrap">
            {technologies.map(({ icon: IconComponent, name }) => (
              <Tooltip key={name} label={name}>
                <Box as="button" _hover={{ transform: "scale(1.1)" }}>
                  <Icon as={IconComponent} boxSize="50" />
                </Box>
              </Tooltip>
            ))}
          </HStack>
        </VStack>
        <Divider mt="4" mb="4" maxW="50%" mx="auto" />
      </Box>
    </Center>
  );
}

export default Skills;
