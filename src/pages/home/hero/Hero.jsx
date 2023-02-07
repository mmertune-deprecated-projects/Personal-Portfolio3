import "./hero.css";
import { ReactComponent as BackgroundIcon } from "../../../assets/personal_logo.svg";

const Hero = () => {
  return (
    <main className="hero section-styling">
      <div className="hero_imageContainer">
        <BackgroundIcon className="hero_svgImage" fill="url(#zima_to_drk_blue_gradient)" />
      </div>
      <div className="hero_text">Marvens Mertune</div>
    </main>
  );
};
export default Hero;
