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
  Text,
  Flex,
} from "@chakra-ui/react";

import { FaPeopleCarry } from "react-icons/fa";
import { SiCreativecommons, SiGithubsponsors } from "react-icons/si";
import { VscGithubAction } from "react-icons/vsc";
import { HiPresentationChartBar } from "react-icons/hi";
import { AiFillCompass } from "react-icons/ai";
import { PiFire } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaComments } from "react-icons/fa";
import { MdOutlineEmojiObjects } from "react-icons/md";

function SoftSkills() {
  const technologies = [
    { icon: FaPeopleCarry, name: "Trabajo en equipo" },
    { icon: SiGithubsponsors, name: "Empatia" },
    // { icon: SiCreativecommons, name: "Creatividad" },
    { icon: VscGithubAction, name: "Proactividad" },
    { icon: HiPresentationChartBar, name: "Comunicacion efectiva" },
    // { icon: PiFire, name: "Apasionada" },
    // { icon: AiFillCompass, name: "Resiliencia" },
    { icon: VscWorkspaceTrusted, name: "Orientacion al cliente" },
    // { icon: MdOutlineEmojiObjects, name: "Inteligencia Emocional" },
  ];

  return (
    <Flex py={6} height="100vh" alignItems="center" justifyContent="center">
    <Box maxW={"1000px"} w={"100%"} mt="60px" position="relative">
        <VStack spacing="6">
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            mb="4"
            bgClip="text"
            textTransform="uppercase"
            color={"#cf2e2e"}
            fontFamily="Bebas Neue, sans-serif"
            fontSize={{ base: "7xl", md: "8rem" }}
          >
            Soft Skills
          </Heading>
          <Text
            fontFamily="Lato, sans-serif"
            textAlign="center"
            mb="8"
            color="black"
            size="5xl"
            fontSize={{ base: "xl", md: "xl" }}
          >
            Estas son mis top 5 de soft skills, las cuales me han permitido
            crecer como profesional y contribuir en los proyectos que he
            participado.
            <br />
            Siempre estoy buscando oportunidades para mejorar y seguir
            desarrollando mas habilidades en mi carrera profesional.
          </Text>
        </VStack>
        <br />
        <VStack spacing="6" alignItems="center">
          <HStack
            spacing={{ base: "8", md: "24" }}
            justify="center"
            flexWrap="wrap"
            maxW="900px"
            w="100%"
            // height="50vh"
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
                    color="black"
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

export default SoftSkills;
