import { useContext } from "react";
import "./app.css";
import { Navbar } from "./components";
import { UIContext } from "./context/UIContext";
import { Hero } from "./pages/home";

const App = () => {
  const { theme } = useContext(UIContext);
  return (
    <div className={`App ${theme}`}>
        <Navbar />
        <Hero />
    </div>
  );
};
export default App;
