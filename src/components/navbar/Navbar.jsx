import "./navbar.css";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import { HashLink } from "react-router-hash-link";
import useScrollDirection from "../../hooks/scrollDirection";
import { MenuOpen } from "@mui/icons-material";
import { IconButton, SvgIcon, Backdrop, Drawer } from "@mui/material";
import { ReactComponent as HomeIcon } from "../../assets/personal_logo.svg";
import customTheme from "../../materialUI/customTheme";

const Navbar = () => {
  // const { theme, setTheme } = useContext(UIContext);
  const { overlayActive, setOverlayState } = useContext(UIContext);
  const scrollDirection = useScrollDirection();

  return (
    <nav
      className={`navbar ${
        scrollDirection === "down" ? "header header_hide" : "header_show"
      }`}
    >
      <div className="header_leftContainer">
        <SvgIcon
          color="primary"
          sx={{ fontSize: 48, display: "flex" }}
          htmlColor="#5bc2e7"
        >
          <HashLink to="/#hero" smooth>
            <HomeIcon />
          </HashLink>
        </SvgIcon>
      </div>
      <div>
        <IconButton
          aria-label="menu"
          color="primary"
          onClick={() => {
            setOverlayState((currentVal) => !currentVal);
          }}
          sx={{ zIndex: (customTheme) => customTheme.zIndex.drawer + 1 }}
        >
          <MenuOpen />
        </IconButton>
      </div>
      {overlayActive && (
      // <Backdrop open={true}>HI</Backdrop>
      <Drawer anchor="right" open={true} onClose={() => {
        setOverlayState((currentVal) => !currentVal);
      }}>Hi</Drawer>
      )
      }
    </nav>
  );
};
export default Navbar;
