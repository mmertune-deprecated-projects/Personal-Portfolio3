import "./home.css";
import { Hero, About, Project, Contact } from ".";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
};
export default Home;
