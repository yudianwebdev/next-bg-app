import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BottomNav from "./BottomNav";
function Layout({ children }) {
  const router = useRouter();
  const url = router.pathname;
  const [value, setValue] = React.useState(0);

  console.log("====================================");
  console.log(url);
  console.log("====================================");
  return (
    <Grid container>
      <Grid>{children}</Grid>
      <BottomNav url={url} />
    </Grid>
  );
}

export default Layout;
