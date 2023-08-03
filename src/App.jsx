import { Routes, Route } from "react-router-dom";
import Porfolio from "./Porfolio/Porfolio";
import Card2 from "./Porfolio/Card2";
import Skills from "./Porfolio/Skills";
import SoftSkills from "./Porfolio/SoftSkills";
import Proyectos from "./Porfolio/Proyectos";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Porfolio />}></Route>
        <Route exact path="/contacto" element={<Card2 />}></Route>
        <Route exact path="/tech-skills" element={<Skills />}></Route>
        <Route exact path="/soft-skills" element={<SoftSkills />}></Route>
        <Route exact path="/proyectos" element={<Proyectos />}></Route>
      </Routes>
    </>
  );
}

export default App;
