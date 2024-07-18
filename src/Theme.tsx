import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: '#0684a1',
      },
    },
})
export default responsiveFontSizes(theme);