// React Import
import React from "react";

// 1. JSX Imports
import {NestedElements, Attribute, Expression,Styling} from './1. JSXelemets'

// 2. Components Imports
import {Stateless} from './2. Components'

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// makeStyles function from Material UI
const useStyles = makeStyles({ 
  root: {
    width: 500
  },
  label: {
    color: "red"
  }
});

export default function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  return (
    
    
    <div>

        {/* 1. JSX [JavaScript Extended] */}

              {/* 1.1 Nested Elements */}
              <NestedElements />
          
              {/* 1.2 Attributes */}
              <Attribute />

              {/* 1.3 Expression */}
              <Expression />

              {/* 1.4 Styling */}
              <Styling/>

        {/* 2. Components  */}

            {/* 2.1 Stateless Component */}
            <Stateless />

            
        {/* Material UI */}
        
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.root}
          label="Recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          className={classes.label}
          label="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>

    </div>
    
  );
}
// 