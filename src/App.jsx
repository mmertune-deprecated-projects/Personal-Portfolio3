import { useContext } from "react";
import "./app.css";
import { Navbar } from "./components";
import { UIContext } from "./context/UIContext";

const App = () => {
  const { theme } = useContext(UIContext);
  return (
    <div className={`App ${theme}`}>
        <Navbar />
    </div>
  );
};
export default App;
