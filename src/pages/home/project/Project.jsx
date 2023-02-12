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
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";
import seabnbImage from "../../../assets/seabnb.png";
import { LineBreak } from "../../../components";
import { SpotlightCard } from "../../../components";

const Project = () => {
  return (
    <section className="project section-styling" id="Project">
      <Typography
        variant="sectionHeader"
        component="h2"
        sx={{ marginBottom: 4 }}
      >
        <Divider textAlign="left">Projects</Divider>
      </Typography>
      <SpotlightCard
        imgPath="/src/assets/seabnb.png"
        cardTitle="Project Spotlight #1"
        cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. Thewebsite includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
        githubLink="https://www.bing.com/"
        webpageLink="https://www.google.com/"
      />
      {/* <Card sx={{ position: "relative", marginBottom: 4 }}>
        <CardMedia
          component="img"
          alt="Picture"
          height="100%"
          image={seabnbImage}
          sx={{ position: "absolute", top: "0", left: "0", zIndex: "10" }}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "quaternary.main",
            opacity: "0.9",
            position: "relative",
            zIndex: "20",
          }}
        >
          <CardContent>
            <Typography variant="subSectionHeader" component="h3">
              Project Spotlight #1
            </Typography>
            <LineBreak />
            <Typography variant="body" component="p">
              This was my first attempt at creating a portfolio website. This
              was made shortly after Learning HTML/CSS and Javascript. The
              website includes CSS animations and CSS layout models such as CSS
              flexbox and CSS Grid.
            </Typography>
            <LineBreak />
            <div className="project_cardLinks">
              <HashLink smooth to="/#hero">
                <GitHub fontSize="large" />
              </HashLink>

              <HashLink smooth to="/#hero">
                <Launch fontSize="large" />
              </HashLink>
            </div>
          </CardContent>
        </Box>
      </Card> */}
      {/* <Card sx={{ position: "relative", zIndex: "-20" }}>
        <CardMedia
          component="img"
          alt="Picture"
          height="100%"
          image={seabnbImage}
          sx={{ position: "absolute", top: "0", left: "0", zIndex: "-10" }}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "quaternary.main",
            opacity: "0.9",
          }}
        >
          <CardContent>
            <Typography variant="subSectionHeader" component="h3">
              Project Spotlight #3
            </Typography>
            <LineBreak />
            <Typography variant="body" component="p">
              This was my first attempt at creating a portfolio website. This
              was made shortly after Learning HTML/CSS and Javascript. The
              website includes CSS animations and CSS layout models such as CSS
              flexbox and CSS Grid.
            </Typography>
          </CardContent>
        </Box>
      </Card> */}
      {/* <Button
        variant="contained"
        color="tertiary"
        size="large"
        sx={{ marginTop: 4 }}
      >
        <HashLink smoooth to="/#Contact">
        See All Projects
        </HashLink>
      </Button> */}

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
