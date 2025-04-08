"use client";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar
      sx={{ bgcolor: "white" }}
      className="flex w-full justify-center items-center h-[var(--admin-navbar-height)]"
      position="fixed"
    >
      <Container maxWidth="xl" className="flex items-center justify-between">
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            fontWeight: 700,
            color: "black",
          }}
        >
          Tamajaki
        </Typography>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          sx={{
            display: { xs: "flex", md: "flex" },
            width: { xs: "10rem", md: "50rem" },
          }}
          variant="standard"
          slotProps={{
            input: {
              endAdornment: <SearchIcon sx={{ color: "#0214DC" }} />,
            },
          }}
        />
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
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
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ textAlign: "center" }}>Carrinho</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ textAlign: "center" }}>Perfil</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* <IconButton
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "black", display: "block" }}
          >
            <ShoppingCartOutlinedIcon sx={{ color: "#0214DC" }} />
          </IconButton>
          <IconButton
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "black", display: "block" }}
          >
            <Person2OutlinedIcon sx={{ color: "#0214DC" }} />
          </IconButton> */}
        </Box>
      </Container>
    </AppBar>
  );
}
