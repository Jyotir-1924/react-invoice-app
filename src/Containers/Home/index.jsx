import { Stack, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import invoiceLogo from "@/images/tax-preparation.png";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function HeroSection({ handleNavigate }) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        background:
          "linear-gradient(to right,rgb(236, 253, 255),rgb(255, 244, 235))",
        overflow: "hidden",
      }}
    >
      <Stack spacing={10} mt={10} sx={{ width: "50%" }}>
        <Stack spacing={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              background: "linear-gradient(270deg,rgb(42, 182, 0),rgb(0, 139, 171),rgb(193, 0, 64))",
              backgroundSize: "600% 600%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: `${gradientAnimation} 8s ease infinite`,
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.05)",
                textShadow: "3px 3px 10px rgba(0,0,0,0.2)",
                cursor: "pointer",
              },
              fontFamily: theme.typography.fontFamily.Manrope,
            }}
          >
            Welcome to Invoice AI
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#444",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                color: "#222",
                cursor: "pointer",
              },
              fontFamily: theme.typography.fontFamily.Manrope,
            }}
          >
            Fill out a form to create a clean, professional invoice in seconds.
          </Typography>
        </Stack>

        <Stack>
          <Button
            variant="contained"
            onClick={handleNavigate}
            sx={{
              px: 5,
              py: 1.8,
              alignSelf: "center",
              fontSize: "1.1rem",
              borderRadius: "18px",
              boxShadow: "0 0 15px rgba(33,150,243,0.4)",
              backgroundColor: "#000",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.07)",
                boxShadow: "0 0 25px rgba(33,150,243,0.7)",
              },
              fontFamily: theme.typography.fontFamily.Montserrat,
              width: "40%",
            }}
          >
            Generate Invoice
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: "40%",
          alignItems: "center",
        }}
      >
        <Image
          src={invoiceLogo}
          alt="Invoice Logo"
          style={{
            width: "80%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Stack>
    </Stack>
  );
}
