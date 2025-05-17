import { createTheme } from "@mui/material/styles";
import { montserratFont, manropeFont, josefinSansFont } from "./fonts";

const theme = createTheme({
  typography: {
    fontFamily: {
      Montserrat: montserratFont.style.fontFamily,
      Manrope: manropeFont.style.fontFamily,
      Josefin: josefinSansFont.style.fontFamily,
    },
  },
});

export default theme;