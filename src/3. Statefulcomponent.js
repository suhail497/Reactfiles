import React from 'react';
class StatefulExample extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":"jdsafjkljaslkd",
               "name":"Foo",
               "age":"20"
            },
            {
               "id":"dsfads",
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {
                      this.state.data.map(
                      (Person, i) => <TableRow key1 = {i}
                       datasd = {Person} />)
                 }
               </tbody>
            </table>
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
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.datasd.id}</td>
            <td>{this.props.datasd.name}</td>
            <td>{this.props.datasd.age}</td>
         </tr>
      );
   }
}
export default StatefulExample;






















    
 export {StatefulExample}