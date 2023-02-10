import "./project.css";
import { Typography, Divider, Card, CardContent, Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const Project = () => {
  return (
    <section className="project section-styling" id="Project">
      <Typography variant="sectionHeader" component="h2">
        <Divider textAlign="left">Projects</Divider>
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="subSectionHeader" component="h3">
            Project Spotlight #1
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="subSectionHeader" component="h3">
            Project Spotlight #2
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="subSectionHeader" component="h3">
            Project Spotlight #3
          </Typography>
        </CardContent>
      </Card>
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

      <HashLink smoooth to="/projects">
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
