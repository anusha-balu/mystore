import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { orange } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
import { lightGreen } from "@material-ui/core/colors";
import { fontWeight } from "@material-ui/system";

export const theme = createMuiTheme({
  palette: {
    primary: { main: lightGreen[700] },
    secondary: { main: blue[700] }
  },
  status: {
    danger: orange
  },
  typography: {
    h6: {
      fontFamily: "Roboto, sans-serif",
      fontSize: ".85rem",
      fontWeight: "bolder"
    },
    body2: {
      fontSize: ".8rem"
    }
  }
});
//  default {theme};
