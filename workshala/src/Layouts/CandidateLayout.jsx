import * as React from "react";
import Header from "./Header";
import SideBar from "../Components/Nav/Sidebar";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";

export default function CandidateLayout({ children }) {
  const theme = createTheme({
    palette: {
      background: {
        default: "#ff00ff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#EDEAEA" },
        }}
      />
      <Grid container spacing={1}>
        <Grid item xs={2.5} sm={2.5} md={2.5} lg={2.5}>
          <SideBar />
        </Grid>
        <Grid
          item
          container
          xs={9.4}
          sm={9.4}
          md={9.4}
          lg={9.4}
          direction="column"
          spacing={1}
        >
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Header />
          </Grid>

          <Grid item container xs={10.5} sm={10.5} md={10.5} lg={10.5}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
