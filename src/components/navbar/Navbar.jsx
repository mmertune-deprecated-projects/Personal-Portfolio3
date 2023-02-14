import "./navbar.css";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import { HashLink } from "react-router-hash-link";
import useScrollDirection from "../../hooks/scrollDirection";
import { MenuOpen, Close } from "@mui/icons-material";
import {
  IconButton,
  SvgIcon,
  Drawer,
  Box,
  List,
  ListItem,
  Link,
  Typography,
} from "@mui/material";
import { ReactComponent as HomeIcon } from "../../assets/personal_logo.svg";
import { ReactComponent as LeftArrow } from "../../assets/leftArrowContainer.svg";
import { ReactComponent as Slash } from "../../assets/forwardSlashContainer.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrowContainer.svg";

// import customTheme from "../../materialUI/customTheme";
import { Link as RouterLink} from "react-router-dom";

const Navbar = () => {
  // const { theme, setTheme } = useContext(UIContext);
  const { overlayActive, setOverlayState } = useContext(UIContext);
  const scrollDirection = useScrollDirection();

  return (
    <nav
      className={`${
        scrollDirection === "down" ? "navbar navbar_hide" : "navbar"
      }`}
      // className="navbar"
    >
      <div className="navbar_leftContainer">
        {/* <HashLink to=""> */}
        <a href=".">
          <SvgIcon
            color="primary"
            sx={{ display: "flex" }}
            // fill="#fefefe"
            // htmlColor="#5bc2e7"
          >
            <HomeIcon fill="#fefefe" />
          </SvgIcon>
        </a>
        {/* </HashLink> */}
      </div>
      <div className="navbar_rightContainer">
        <IconButton
          aria-label="menu"
          color="primary"
          onClick={() => {
            setOverlayState((currentVal) => !currentVal);
          }}
          sx={{
            // zIndex: (customTheme) => customTheme.zIndex.drawer + 1,
            zIndex: 1,
          }}
        >
          <MenuOpen fontSize="large" />
        </IconButton>
      </div>
      {overlayActive && (
        // <Backdrop open={true}>HI</Backdrop>
        <Drawer
          anchor="right"
          open={true}
          onClose={() => {
            setOverlayState((currentVal) => !currentVal);
          }}
          PaperProps={{ elevation: 0 }}
        >
          <div className="navbar_closeIcon">
            <IconButton
              aria-label="menu"
              color="primary"
              onClick={() => {
                setOverlayState((currentVal) => !currentVal);
              }}
              sx={{
                // zIndex: (customTheme) => customTheme.zIndex.drawer + 1,
                zIndex: 1,
                width: "fit-content",
                height: "56px",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <Close fontSize="large" />
            </IconButton>
          </div>
          <Box
            sx={{
              width: "70vw",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // backgroundColor: "quaternary.main",
              alignItems: "center",
              margin: "auto 0",
            }}
          >
            <List>
              {["Home", "About", "Project", "Contact"].map((item) => (
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setOverlayState((currentVal) => !currentVal);
                  }}
                >
                  <Link
                    to={`/#${item.toLowerCase()}`}
                    underline="none"
                    component={HashLink}
                    smooth
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SvgIcon fontSize="16px">
                      <LeftArrow stroke="#E84757" />
                    </SvgIcon>
                    <Typography
                      variant="drawerText"
                      component="span"
                      sx={{ marginLeft: 2, marginRight: 2 }}
                    >
                      {item}
                    </Typography>
                    {/* <span className="navbar_overlayText">{item}
                    </span> */}
                    <div className="navbar_slashContainer">
                      <Slash height="30" stroke="#E84757" />
                    </div>
                    <SvgIcon fontSize="16px">
                      <RightArrow stroke="#E84757" />
                    </SvgIcon>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </nav>
  );
};
export default Navbar;
