import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Home from "./components/Home";

const theme = createMuiTheme({
  zIndex: {},
  palette: {
    primary: { main: "#0096d6" },
    secondary: { main: "#d7410b" }
  },
  overrides: {
    MuiTableCell: {
      stickyHeader: {
        "z-index": 99
      }
    },
    MuiTableBody: {
      root: {
        "& .MuiTableCell-root.currencyWithPercentageStyle": {
          "min-width": "150px",
          "& svg": {
            "padding-left": "10px",
            "vertical-align": "middle !important"
          }
        }
      }
    }
  }
});

class Blog extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <Home />
        </I18nextProvider>
      </MuiThemeProvider>
    );
  }
}

export default Blog;
