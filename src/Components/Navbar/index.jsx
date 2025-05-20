import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const router = useRouter();
  const theme = useTheme();
  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "linear-gradient(to right,rgb(236, 253, 255),rgb(255, 244, 235))",
        color: "#333",
        px: 3,
        py: 2,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        {/* Logo to be added */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontFamily: theme.typography.fontFamily.Josefin,
            background:
              "linear-gradient(to right,rgb(220, 151, 255),rgb(255, 97, 163))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => handleNavigate("/")}
        >
          Invoice AI
        </Typography>

        <Stack direction="row" spacing={3}>
          <Button
            variant="text"
            sx={{
              color: "#333",
              fontWeight: 500,
              transition: "transform 0.4s ease",
              "&:hover": {
                color: "#1976d2",
                backgroundColor: "transparent",
                transform: "scale(1.09)",
              },
              fontFamily: theme.typography.fontFamily.Josefin,
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
              transition: "transform 0.4s ease",
              "&:hover": {
                color: "#1976d2",
                backgroundColor: "transparent",
                transform: "scale(1.09)",
              },
              fontFamily: theme.typography.fontFamily.Josefin,
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
              transition: "transform 0.4s ease",
              "&:hover": {
                color: "#1976d2",
                backgroundColor: "transparent",
                transform: "scale(1.09)",
              },
              fontFamily: theme.typography.fontFamily.Josefin,
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
