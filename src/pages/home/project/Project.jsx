import "./project.css";
import {
  Typography,
  Divider,
  Card,
  CardContent,
  Button,
  CardMedia,
  Box,
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";
import seabnbImage from "../../../assets/seabnb.png";
import { LineBreak } from "../../../components";
import { SpotlightCard } from "../../../components";
import { useTheme } from "@mui/material/styles";
import { Masonry } from "@mui/lab";

const Project = () => {
  const theme = useTheme();
  const smallphoneView = useMediaQuery(theme.breakpoints.down("sm"));
  const smallTabletView = useMediaQuery(theme.breakpoints.up("sm"));
  const largeTabletView = useMediaQuery(theme.breakpoints.up("md"));
  const laptopView = useMediaQuery(theme.breakpoints.up("lg"));
  const lgDesktopView = useMediaQuery(theme.breakpoints.up("xl"));

  const columnVal = () => {
    if (lgDesktopView) {
      return 2;
    } else if (laptopView) {
      return 2;
    } else if (largeTabletView) {
      return 2;
    } else if (smallTabletView) {
      return 2;
    } else if (smallphoneView) {
      return 1;
    }
  };
  return (
    <section className="project section-styling" id="project">
      <Typography
        variant="sectionHeader"
        component="h2"
        sx={{ marginBottom: 4 }}
      >
        <Divider textAlign="left">Project Spotlights</Divider>
      </Typography>
      <Masonry columns={columnVal()} sx={{ margin: 0 }}>
        <SpotlightCard
          image="seaBnb"
          cardTitle="SeaBnb"
          cardDescription="A website I am continuously improving upon to allow users to post their aquatic home/cabins, future implementation will setup up a feature to rent out the cabins. The frontend is built with HTML/CSS and React. Redux is used for the state management of the program. The backend is built with Node and Express. MongoDB is used for the Database and Mongoose is used to create the schema for the database"
          githubLink="https://github.com/mmertune/SeaBNB"
          webpageLink="https://seabnb.marvensmertune.com/"
          marginBtm={0}
        />
        <SpotlightCard
          image="jotter"
          cardTitle="Jotter"
          cardDescription="A web application inspired by Google Keep. Visitors can create a note for the community. The frontend is built with React.js and the backend is built with Java using spring boot and MYSQL for the database. J-unit is used for testing during development"
          githubLink="https://github.com/mmertune/Jotter"
          webpageLink="https://jotter.marvensmertune.com/"
          marginBtm={0}
        />
        <SpotlightCard
          image="v2_portfolio"
          cardTitle="Personal Website Version #2"
          cardDescription="My portfolio website created using HTML/CSS and React. My first portfolio website was built with only HTML/CSS and Javascript but after learning to use React, I decided to update my portfolio website to apply my learning and improve my UI designing skills"
          githubLink="https://github.com/mmertune/Personal-Portfolio2"
          webpageLink="https://ver2.marvensmertune.com/"
          marginBtm={0}
        />
      </Masonry>

      <HashLink smooth to="/projects">
        <Button
          variant="contained"
          color="tertiary"
          size="large"
          sx={{ marginTop: 4 }}
        >
          See All Projects
        </Button>
      </HashLink>
    </section>
  );
};
export default Project;
