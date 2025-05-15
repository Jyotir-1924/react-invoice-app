import { AppBar, Toolbar, Typography, Stack, Button, Box } from "@mui/material";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#333",
        px: 3,
        py: 1,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        {/* Logo to be added */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: "'Segoe UI', sans-serif",
            background: "linear-gradient(to right,rgb(220, 151, 255),rgb(255, 97, 163))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => handleNavigate("/")}
        >
          Invoice AI
        </Typography>

        {/* Navigation Links */}
        <Stack direction="row" spacing={3}>
          <Button
            variant="text"
            sx={{
              color: "#333",
              fontWeight: 500,
              "&:hover": {
                color: "#1976d2",
                backgroundColor: "transparent",
              },
            }}
            onClick={() => handleNavigate("/contact")}
          >
            Contact
          </Button>

          <Button
            variant="text"
            sx={{
              color: "#333",
              fontWeight: 500,
              "&:hover": {
                color: "#1976d2",
                backgroundColor: "transparent",
              },
            }}
            onClick={() => handleNavigate("/about")}
          >
            About Us
          </Button>

          <Button
            variant="text"
            sx={{
              color: "#333",
              fontWeight: 500,
              "&:hover": {
                color: "#1976d2",
                backgroundColor: "transparent",
              },
            }}
            onClick={() => handleNavigate("/custom-invoice")}
          >
            Custom Invoice
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
