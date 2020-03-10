// React Import
import React from "react";


// // 1. JSX Imports
import {NestedElements, Attribute, Expression,Styling} from './1. JSXelemets'

// // 2. Components Imports
import {StatelessExample} from './2. Statelesscomponent'
import {StatefulExample} from './3. Statefulcomponent'

// //  3. State Example 
import {StateExampleCheck, DerivedClass} from './4. StateExample'
import {PropsExample} from './5. Props'

// // Material UI Imports
// import { makeStyles } from "@material-ui/core/styles";
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// // import BottomNavigation from "@material-ui/core/BottomNavigation";
// // import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// // import RestoreIcon from "@material-ui/icons/Restore";
// // import FavoriteIcon from "@material-ui/icons/Favorite";
// // import LocationOnIcon from "@material-ui/icons/LocationOn";

// // makeStyles function from Material UI
// // const useStyles = makeStyles({ 
// //   root: {
// //     width: 500
// //   },
// //   label: {
// //     color: "red"
// //   }
// // });

export default class App extends React.Component{
 constructor(props) {
    super(props);
    this.state = {
       header: "Header from state...",
       content: "Content from state..."
    }
   
 }
  render(){
//             // const classes = useStyles();

//             // const [value, setValue] = React.useState(0);

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

                        {/* 2 Stateless Component */}
                      <StatelessExample />

                        {/* 3.StatefulExample */}
                            <StatefulExample/>

                  {/* 3. State Example */}
                    <h1>{this.state.header}</h1>
                    <p>{this.state.content}</p>
                    <StateExampleCheck />
                    <DerivedClass />

                  {/* 4. Props Example  */}
                    <h1>{this.props.headerProp}</h1>
                    <h2>{this.props.footerProp}</h2> 

                    {/* 5. Default Props */}

              </div>
            
            );
  }
  
}


App.defaultProps = {
  headerProp : "Suhail", 
  footerProp : "Nadeem"
}



