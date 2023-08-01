import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Divider,
  Tooltip,
  Center,
  Icon,
} from "@chakra-ui/react";

import { FaPeopleCarry } from "react-icons/fa";
import { SiCreativecommons, SiGithubsponsors } from "react-icons/si";
import { VscGithubAction } from "react-icons/vsc";
import { HiPresentationChartBar } from "react-icons/hi";
import { AiFillCompass } from "react-icons/ai";
import { PiFire } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function SoftSkills() {
  const technologies = [
    { icon: FaPeopleCarry, name: "Trabajo en equipo" },
    { icon: SiGithubsponsors, name: "Empatia" },
    { icon: SiCreativecommons, name: "Creatividad" },
    { icon: VscGithubAction, name: "Proactividad" },
    { icon: HiPresentationChartBar, name: "Presentaciones grupales" },
    { icon: PiFire, name: "Apasionada" },
    { icon: AiFillCompass, name: "Resiliencia" },
    { icon: VscWorkspaceTrusted, name: "Responsabilidad" },
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
            Soft Skills
          </Heading>
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

export default SoftSkills;
