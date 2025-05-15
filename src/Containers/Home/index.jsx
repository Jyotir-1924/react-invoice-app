import { useRouter } from "next/router";
import { Button, Typography, Stack } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/form");
  };

  return (
    <Stack
      spacing={4}
      sx={{
        height: "100dvh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        background: "linear-gradient(to right, #f0f4f8, #e0e7ff)",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(to right, #3f51b5, #2196f3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.05)",
            textShadow: "3px 3px 10px rgba(33, 150, 243, 0.4)",
            cursor: "pointer",
          },
        }}
      >
        Welcome to Invoice Generator
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#444",
          fontStyle: "italic",
          textShadow: "1px 1px 2px rgba(0,0,0,0.05)",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
            color: "#222",
            cursor: "pointer",
          },
        }}
      >
        Fill out a form to create a clean, professional invoice in seconds.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleNavigate}
        sx={{
          px: 5,
          py: 1.8,
          fontSize: "1.1rem",
          borderRadius: "12px",
          textTransform: "none",
          boxShadow: "0 0 15px rgba(33,150,243,0.4)",
          backgroundColor: "#1976d2",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.07)",
            backgroundColor: "#1565c0",
            boxShadow: "0 0 25px rgba(33,150,243,0.7)",
          },
        }}
      >
        Generate Invoice
      </Button>
    </Stack>
  );
}
