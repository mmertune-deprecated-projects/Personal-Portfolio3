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
      <Masonry columns={columnVal()}>
        <SpotlightCard
          image="seaBnb"
          cardTitle="Project Spotlight #1"
          cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. The website includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
          githubLink="https://www.bing.com/"
          webpageLink="https://www.google.com/"
          marginBtm={0}
        />
        <SpotlightCard
          image="seaBnb"
          cardTitle="Project Spotlight #1"
          cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. The website includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
          githubLink="https://www.bing.com/"
          webpageLink="https://www.google.com/"
          marginBtm={0}
        />
        <SpotlightCard
          image="seaBnb"
          cardTitle="Project Spotlight #1"
          cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. The website includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
          githubLink="https://www.bing.com/"
          webpageLink="https://www.google.com/"
          marginBtm={0}
        />
      </Masonry>
    </main>
  );
};
export default Projects;
