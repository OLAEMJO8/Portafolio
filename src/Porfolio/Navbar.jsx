import {
  Box,
  Flex,
  Button,
  Stack,
  IconButton,
  useDisclosure,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({
  scrollToContact,
  scrollToTechSkills,
  scrollToSoftSkills,
  scrollToProyectos,
}) => {
  const mobileNav = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems="center" justifyContent="center" px={4}>
          <Stack
            direction="row"
            spacing={3}
            display={{ base: "none", md: "flex" }}
          >
           
            <Button
              onClick={scrollToContact}
              variant="outline"
              color={"white"}
              _hover={{ bg: "teal.500" }}
            >
              Contacto
            </Button>
            <Button
              onClick={scrollToTechSkills}
              variant="outline"
              color={"white"}
              _hover={{ bg: "teal.500" }}
            >
              Tech Skills
            </Button>
            <Button
              onClick={scrollToSoftSkills}
              variant="outline"
              color={"white"}
              _hover={{ bg: "teal.500" }}
            >
              Soft Skills
            </Button>
            <Button
              onClick={scrollToProyectos}
              variant="outline"
              color={"white"}
              _hover={{ bg: "teal.500" }}
            >
              Proyectos
            </Button>
          </Stack>

          <Box   display={{ base: "inline-flex", md: "none" }} position="center"   left={0}
            right={0} >
            <IconButton
              aria-label="Open menu"
              fontSize="20px"
              
              color="white"
              _hover={{ bg: "teal.500" }}
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Box>
        </Flex>

        <Box display={{ base: "inline-flex", md: "none" }}>
          <VStack
            pos="absolute"
            // top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            color="white"
            spacing={3}
            rounded="sm"
            shadow="sm"
            
          >
            <CloseButton
              aria-label="Close menu"
              onClick={mobileNav.onClose}
              color="white"
              
            />

            <Button variant="outline" color="white"  bg={"teal"}   _hover={{ bg: "teal.500" }} onClick={scrollToContact}>
              Contacto
            </Button>
            <Button
              variant="outline"
              color="white"
              bg={"teal"}
              _hover={{ bg: "teal.500" }}
              onClick={scrollToTechSkills}
            >
              Tech Skills
            </Button>
            <Button
              variant="outline"
              color="white"
              bg={"teal"}
              _hover={{ bg: "teal.500" }}
              onClick={scrollToSoftSkills}
            >
              Soft Skills
            </Button>
            <Button variant="outline" color="white"   bg={"teal"}   _hover={{ bg: "teal.500" }} onClick={scrollToProyectos}>
              Proyectos
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
