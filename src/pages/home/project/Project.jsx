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
      <Masonry columns={columnVal()}>
        <SpotlightCard
          image="seaBnb"
          cardTitle="Project Spotlight #1"
          cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. Thewebsite includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
          githubLink="https://github.com/mmertune/SeaBNB"
          webpageLink="https://seabnb.marvensmertune.com/"
          marginBtm={0}
        />
        <SpotlightCard
          image="jotter"
          cardTitle="Project Spotlight #2"
          cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. Thewebsite includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
          githubLink="https://www.bing.com/"
          webpageLink="https://www.google.com/"
          marginBtm={0}
        />
      </Masonry>

      {/* <SpotlightCard
        image="jotter"
        cardTitle="Project Spotlight #3"
        cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. Thewebsite includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
        githubLink="https://www.bing.com/"
        webpageLink="https://www.google.com/"
      /> */}
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
