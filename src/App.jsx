
import { Routes, Route } from "react-router-dom";
import Porfolio from "./Porfolio/Porfolio";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Porfolio />}></Route>
      </Routes>
    </>
  );
}

export default App;
