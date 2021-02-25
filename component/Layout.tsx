import { Grid } from "@material-ui/core";
import React from "react";
import BottomNav from "./BottomNav";
function Layout({ children }) {
  return (
    <Grid container>
      <Grid>{children}</Grid>
      <BottomNav />
    </Grid>
  );
}

export default Layout;
