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
} from "@mui/material";
import { ReactComponent as HomeIcon } from "../../assets/personal_logo.svg";
// import customTheme from "../../materialUI/customTheme";
// import { Link } from "react-router-dom";

const Navbar = () => {
  // const { theme, setTheme } = useContext(UIContext);
  const { overlayActive, setOverlayState } = useContext(UIContext);
  const scrollDirection = useScrollDirection();

  return (
    <nav
      // className={`navbar ${
      //   scrollDirection === "down" ? "header header_hide" : "header_show"
      // }`}
      className="navbar"
    >
      <div className="navbar_leftContainer">
        <HashLink to="/#hero">
          <SvgIcon
            color="primary"
            sx={{ display: "flex" }}
            fill="#fefefe"
            // htmlColor="#5bc2e7"
          >
            <HomeIcon fill="#fefefe" />
          </SvgIcon>
        </HashLink>
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
          PaperProps={{sx:{backgroundColor:"quaternary.main"}}}
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
                height:"56px",
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
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link href={`#${item}`} underline="none" smooth>
                    &#60;<span className="navbar_overlayText">{item}</span>
                    &#47;&#62;
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
