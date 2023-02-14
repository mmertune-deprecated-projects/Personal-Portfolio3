import "./hero.css";
import { ReactComponent as BackgroundIcon } from "../../../assets/personal_logo.svg";
import { ReactComponent as BackgroundSVG } from "../../../assets/notebook_with_closing_tag.svg";
import { Typography, Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <main className="hero section-styling" id="home">
      <div>
        <Typography variant="header" component="h1">
          Marvens Mertune
        </Typography>
        <Typography variant="subHeader" component="h2">
          Software Engineer / Computer Engineer Graduate
        </Typography>
        <HashLink smooth to="/#contact">
          <Button
            variant="contained"
            color="tertiary"
            size="large"
            sx={{ marginTop: 4 }}
          >
            Let's Talk
          </Button>
        </HashLink>
      </div>
      <div className="hero_imageContainer">
        <BackgroundIcon
          className="hero_svgImage"
          fill="url(#zima_to_drk_blue_gradient)"
        />
        {/* <BackgroundSVG className="notebook_svgImage" /> */}
      </div>
      {/* <div className="hero_text">Marvens Mertune</div> */}
    </main>
  );
};
export default Hero;
