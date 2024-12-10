import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
// import Logo from '../components/Logo'
import {
  Fab,
  Modal,
  Slide,
  TextField,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { Settings } from "@mui/icons-material";

const pages = [
  { title: "My Work", route: "#work" },
  { title: "Your Project", route: "#project" },
  { title: "Contact", route: "https://www.linkedin.com/in/gabrielgardini/" },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  //ESTILOS DO HEADER
  const matches = useMediaQuery("(min-width:600px)");
  const matches2 = useMediaQuery("(min-width:900px)");

  const logo = {
    textAlign: "left",
    width: matches ? 255 : 168,
    height: matches ? 64 : 42,
  };
  const box1 = {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: "flex-end",
  };
  const box2 = {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
    mr:25
  };
  const option = {
    color: "gray",
    display: "block",
    fontSize: 24,
    textDecoration: "none",
    margin: 30,
  };
  const optionSmall = {
    textDecoration: "none",
    color: "black",
  };

  const I18N_STORAGE_KEY = "i18nextLng";
  const handleSelectChange = (event) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location = window.location;
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ mb: matches ? 15 : 10 }}>
        <HideOnScroll>
          <AppBar elevation={0} sx={{ bgcolor: "white", color: "black" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <h1
                  style={{
                    textShadow: "2px 2px 5px rgba(53, 201, 115, 0.5)",
                    marginLeft: matches ? 60 : 30,
                  }}
                >
                  GardiniDev
                </h1>
                <Box sx={box1}>
                  <IconButton
                    size="large"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    className="menuButton"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.title}>
                        <Typography fontFamily={"Archivo"} textAlign="center">
                          <a href={page.route} style={optionSmall}>
                            {page.title}
                          </a>
                        </Typography>
                      </MenuItem>
                    ))}
                 
                  </Menu>
                </Box>
                <Box sx={box2}>
                  {pages.map((page, index) => (
                    <div key={index}>
                      <Typography fontFamily={"Archivo"} textAlign="center">
                        <a
                          href={page.route}
                          target={
                            page.route.includes("http") ? "_blank" : "_self"
                          }
                          style={option}
                        >
                          {page.title}
                        </a>
                      </Typography>
                    </div>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
        {/* {matches2 ?
        <Fab style={fab} onClick={() => {
          handleOpen()
        }} size="small" color="secondary" aria-label="add">
          <Settings/>
        </Fab>
        : null
      } */}
      </Box>
    </>
  );
};
export default Header;
