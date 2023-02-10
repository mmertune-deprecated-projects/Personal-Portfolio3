// import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
// import { Navbar } from "./components";
// import { UIContext } from "./context/UIContext";
// import { Hero, About, Project, Contact } from "./pages/home";
import {Home, Projects, Error404} from "./pages";

const App = () => {
  // const { theme } = useContext(UIContext);
  return (
    <div className={`App`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
};
export default App;
