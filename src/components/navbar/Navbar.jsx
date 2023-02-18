import "./navbar.css";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import { HashLink } from "react-router-hash-link";
import useScrollDirection from "../../hooks/scrollDirection";
import useWindowSize from "../../hooks/windowSize";
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
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as HomeIcon } from "../../assets/personal_logo.svg";
import { ReactComponent as LeftArrow } from "../../assets/leftArrowContainer.svg";
import { ReactComponent as Slash } from "../../assets/forwardSlashContainer.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrowContainer.svg";
import { useTheme } from "@mui/material/styles";
// import customTheme from "../../materialUI/customTheme";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  // const { theme, setTheme } = useContext(UIContext);
  const { overlayActive, setOverlayState } = useContext(UIContext);
  const scrollDirection = useScrollDirection();
  const size = useWindowSize();

  const theme = useTheme();
  console.log(size.width);
  console.log(theme.breakpoints.values.sm);

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
        {size.width < theme.breakpoints.values.sm ? (
          <IconButton
            aria-label="menu"
            color="primary"
            onClick={() => {
              setOverlayState((currentVal) => !currentVal);
            }}
            sx={{
              // zIndex: (customTheme) => customTheme.zIndex.drawer + 1,
              zIndex: 1,
              // padding: "0",
              float:"right",
            }}
          >
            <MenuOpen fontSize="large" />
          </IconButton>
        ) : (
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {["Home", "About", "Project", "Contact"].map((item) => (
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight:0,
                  marginLeft: 1,

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
                  {/* <SvgIcon fontSize="1px">
                    <LeftArrow stroke="#E84757" />
                  </SvgIcon> */}
                  <Typography
                    variant="navTextContaner"
                    component="span"
                    sx={{
                      marginLeft: 0.5,
                      // marginRight: 0.5,
                      color: "tertiary.main",
                    }}
                  >
                    &#60;
                    <Typography
                      variant="navText"
                      component="span"
                      sx={{
                        marginLeft: 1,
                        marginRight: 1,
                        color: "primary.main",
                      }}
                    >
                      {item}
                    </Typography>
                    &#47;&#62;
                  </Typography>
                  {/* <span className="navbar_overlayText">{item}
                    </span> */}
                  {/* <div className="navbar_slashContainerNav">
                    <Slash height="30" stroke="#E84757" />
                  </div> */}
                  {/* <SvgIcon fontSize="1px">
                    <RightArrow stroke="#E84757" />
                  </SvgIcon> */}
                </Link>
              </ListItem>
            ))}
          </List>
        )}
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
                // width: "fit-content",
                height: "56px",
                display: "flex",
                justifyContent: "right",
                // padding: "0",
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
                    <div className="navbar_slashContainerBox">
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
