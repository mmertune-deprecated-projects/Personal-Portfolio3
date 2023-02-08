import "./hero.css";
import { ReactComponent as BackgroundIcon } from "../../../assets/personal_logo.svg";
import { Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <main className="hero section-styling">
      <div>
        <Typography variant="header" component="h1">
          Marvens Mertune
        </Typography>
        <Typography variant="subHeader" component="h2">
          Software Engineer / Computer Engineer Graduate
        </Typography>
        <Button
          variant="contained"
          color="tertiary"
          size="large"
          sx={{ marginTop: 4 }}
        >
          Let's Talk
        </Button>
      </div>
      <div className="hero_imageContainer">
        <BackgroundIcon
          className="hero_svgImage"
          fill="url(#zima_to_drk_blue_gradient)"
        />
      </div>
      {/* <div className="hero_text">Marvens Mertune</div> */}
    </main>
  );
};
export default Hero;
