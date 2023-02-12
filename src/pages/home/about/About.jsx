import "./about.css";
import { Typography, Divider } from "@mui/material";
import {LineBreak} from "../../../components/"


const About = () => {
  return (
    <section className="about section-styling" id="About">
      <Typography variant="sectionHeader" component="h2" sx={{ marginBottom:4 }}>
        <Divider textAlign="left">About</Divider>
      </Typography>
      <Typography variant="body" component="p">
        Hello! I’m Marvens Mertune, a software developer. In May 2022, I
        graduated with a bachelor of science in Computer Engineering. Throughout
        my journey in college, I learned about hardware and software principles
        of computing. These included designing solutions for embedded systems
        and using electrical engineering and computer science skills to build
        solutions to real-world problems. Of the things I learned, developing
        software systems using various programming languages, such as Java and
        C, piqued my interest the most. I translated the skills I learned into
        software development, focusing mainly on web technologies.
      </Typography>
      <LineBreak />
      <Typography variant="body" component="p">
        Since graduation, I have been working on projects to improve my skills
        in Software development, learning more about technologies used in the
        industry. Listed below are some of the technologies I have been using:
      </Typography>
    </section>
  );
};
export default About;
