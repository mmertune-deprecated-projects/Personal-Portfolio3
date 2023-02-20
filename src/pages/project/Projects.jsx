import { Navbar, SpotlightCard } from "../../components";
import "./projects.css";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Masonry } from "@mui/lab";

const Projects = () => {
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
    <main className="projects section-styling">
      <Navbar />
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
        <SpotlightCard
          image="v1_portfolio"
          cardTitle="Personal Website Version #1"
          cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. The website includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid"
          githubLink="https://github.com/mmertune/Personal-Portfolio"
          webpageLink="https://ver1.marvensmertune.com/"
          marginBtm={0}
        />
        <SpotlightCard
          image="shellhack2022"
          cardTitle="ShellHacks 2022 Hackathon Project"
          cardDescription='A frontend demo built by during the Shellhacks 2022 hackathon by myself and three other developers. The demo uses HTML/CSS and React for the frontend. The "Full Calendar Javascript Calendar"(https://fullcalendar.io/) was used as a base for the project'
          githubLink="https://github.com/tsedef/ShellHacks-2022-"
          webpageLink="https://shellhacks2022.marvensmertune.com/"
          marginBtm={0}
        />
      </Masonry>
    </main>
  );
};
export default Projects;
