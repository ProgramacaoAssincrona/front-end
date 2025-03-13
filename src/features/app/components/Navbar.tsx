import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar, Container } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Navbar() {
  return (
    <AppBar
      sx={{ bgcolor: "white" }}
      className="flex  w-ful justify-center h-[var(--admin-navbar-height)]"
      position="fixed"
    >
      <Container maxWidth="xl" className="flex items-center justify-between">
        <h2 className="text-[var(--font)]">Tamajaki</h2>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className="w-6/12"
          variant="standard"
          slotProps={{
            input: {
              endAdornment: <SearchIcon sx={{ color: "#0214DC" }} />,
            },
          }}
        />
        <div>
          <ShoppingCartOutlinedIcon sx={{ color: "#0214DC" }} />
          <Person2OutlinedIcon sx={{ color: "#0214DC" }} />
        </div>
      </Container>
    </AppBar>
  );
}
