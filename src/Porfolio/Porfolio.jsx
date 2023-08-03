import React, { useState, useRef } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import fondo from "../Fondo/fondo2.png";

import Card from "./Card";
import Proyectos from "./Proyectos";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";
import Navbar from "./Navbar";
import { FaArrowCircleUp } from "react-icons/fa";
import Card2 from "./Card2";
import Footer from "./Footer";

const Porfolio = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  const contactRef = useRef(null);
  const techSkillsRef = useRef(null);
  const softSkillsRef = useRef(null);
  const proyectosRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTechSkills = () => {
    if (techSkillsRef && techSkillsRef.current) {
      techSkillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSoftSkills = () => {
    if (softSkillsRef && softSkillsRef.current) {
      softSkillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProyectos = () => {
    if (proyectosRef && proyectosRef.current) {
      proyectosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      backgroundImage={`url(${fondo})`}
      bgSize="cover"
      // bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      // py={{ base: 4, md: 10 }}
    >
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        width="100%"
        zIndex="999"
      >
        <Navbar
          scrollToContact={scrollToContact}
          scrollToTechSkills={scrollToTechSkills}
          scrollToSoftSkills={scrollToSoftSkills}
          scrollToProyectos={scrollToProyectos}
        />
      </Box>
      <div>
        <Card />
      </div>
      <div>
        <div ref={contactRef}>
          <Card2 />
        </div>

        <div ref={techSkillsRef}>
          <Skills />
        </div>

        <div ref={softSkillsRef}>
          <SoftSkills />
        </div>

        <div ref={proyectosRef}>
          <Proyectos />
        </div>
        <div>
          <Footer />
        </div>
      </div>

      {showScroll && (
        <IconButton
          icon={<FaArrowCircleUp />}
          onClick={scrollTop}
          size="lg"
          bg="teal.500"
          position="fixed"
          bottom="50px"
          right="50px"
          zIndex="999"
          _hover={{ bg: "white" }}
        />
      )}
    </Box>
  );
};

export default Porfolio;
