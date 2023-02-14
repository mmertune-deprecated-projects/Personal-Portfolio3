import { Navbar, SpotlightCard } from "../../components";
import "./projects.css";
const Projects = () => {
  return (
    <main className="projects section-styling">
      <Navbar />
      <SpotlightCard
        image="seaBnb"
        cardTitle="Project Spotlight #1"
        cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. Thewebsite includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
        githubLink="https://www.bing.com/"
        webpageLink="https://www.google.com/"
      />
      <SpotlightCard
        image="seaBnb"
        cardTitle="Project Spotlight #1"
        cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. Thewebsite includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
        githubLink="https://www.bing.com/"
        webpageLink="https://www.google.com/"
      />
      <SpotlightCard
        image="seaBnb"
        cardTitle="Project Spotlight #1"
        cardDescription="This was my first attempt at creating a portfolio website. Thiswas made shortly after Learning HTML/CSS and Javascript. Thewebsite includes CSS animations and CSS layout models such as CSSflexbox and CSS Grid."
        githubLink="https://www.bing.com/"
        webpageLink="https://www.google.com/"
      />
    </main>
  );
};
export default Projects;
