import React from 'react';

// 1. Stateless Example
class StatelessExample extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
            <FunctionStatelessExample />
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
const FunctionStatelessExample = () =>{
    return(
        <div>
            <p>Checking Stateless Example</p>
        </div>
    )
}


export {StatelessExample}
































