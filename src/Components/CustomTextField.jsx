import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#F9FAFB",
  borderRadius: "12px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  width: "100%",
  fontSize: "0.875rem", // Reduced font size from default 1rem to 0.875rem

  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "inherit",
    fontSize: "0.875rem", // Reduced font size
    "& fieldset": {
      borderColor: "#CBD5E1",
      borderWidth: "1.5px",
      transition: "border-color 0.3s ease",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.dark,
      borderWidth: "2px",
      boxShadow: `0 0 0 3px ${theme.palette.primary.light}66`,
    },
  },

  "& .MuiInputBase-input": {
    padding: "14px 14px", // Reduced padding to make the field smaller
    fontSize: "0.875rem", // Ensures input text is also smaller
  },

  "& .MuiInputLabel-root": {
    fontSize: "0.875rem", // Smaller label text
    top: 0,
  },

  "& input::placeholder": {
    color: "#9CA3AF", // gray placeholder
    opacity: 1,
    fontSize: "0.875rem", // Smaller placeholder text
    textAlign: "center", // Centers the placeholder text
  },

  "& .MuiInputBase-multiline": {
    padding: theme.spacing(1.2), // Reduced from 1.5
  },
}));

export default CustomTextField;
