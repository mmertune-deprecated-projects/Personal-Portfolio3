import "./spotlightCard.css";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";
import { LineBreak } from "../";
import assets from "../../assets/assets";

const SpotlightCard = ({
  image,
  cardTitle,
  cardDescription,
  githubLink,
  webpageLink,
}) => {
  return (
    <div>
      <Card sx={{ position: "relative", marginBottom: 4 }}>
        <CardMedia
          component="img"
          alt="Picture"
          height="100%"
          image={assets[image]}
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
              {cardTitle}
            </Typography>
            <LineBreak />
            <Typography variant="body" component="p">
              {`${cardDescription}`}
            </Typography>
            <LineBreak />
            <div className="project_cardLinks">
              {/* <SvgIcon
              color="primary"
              sx={{ display: "flex", marginRight: 2 }}
              fill="#fefefe"
            > */}
              <HashLink
                smooth
                to={{ pathname: `${githubLink}` }}
                target="_blank"
              >
                <GitHub fontSize="large" />
              </HashLink>
              {/* </SvgIcon> */}
              {/* <SvgIcon
              color="primary"
              sx={{ display: "flex" }}
              fill="#fefefe"
            > */}
              <HashLink
                smooth
                to={{ pathname: `${webpageLink}` }}
                target="_blank"
              >
                <Launch fontSize="large" />
              </HashLink>
            </div>
            {/* </SvgIcon> */}
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};
export default SpotlightCard;
