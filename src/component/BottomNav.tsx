import React, { useEffect } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Router from "next/router";

export default function BottomNav({ url }) {
  const [value, setValue] = React.useState(url);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue: string) => {
        // setValue(newValue);
        console.log("====================================");
        console.log(newValue);
        console.log("====================================");
      }}
      showLabels
      className="bottomnav"
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
