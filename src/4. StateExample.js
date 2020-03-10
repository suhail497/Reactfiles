import React from 'react';

// State is the place where data comes from
// You should always keep your stateful components minimal to transfer the data
// You need to Create a Container Component to pass the data to all the other components

class StateExampleCheck extends React.Component{

    constructor(){
        super()
        this.someState = {
            data: 
            [
               {
                  "id":1,
                  "name":"Foo",
                  "age":"20"
               },
               {
                  "id":2,
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

    render(){
        return(
            <div>
                <h1>somet Text</h1>
                <h2>some more text</h2>
                <h3> {
                      this.someState.data.map(
                      (value, position) => <p>
                      Value: {value.name}
                      Position: {position}
                      </p>)
                 }
                 </h3>

            </div>
        )
    }
}

class DerivedClass extends StateExampleCheck{
    constructor(){
        super()
        this.someState = {
            data:[
                
                    {
                        "id":123,
                        "name":"Arju",
                        "age":"20"
                     },
                     {
                        "id":456,
                        "name":"Suhail",
                        "age":"30"
                     },
                
            ]
        }
    }
    render(){
        return(
            <div>
                <h5>
                {
                      this.someState.data.map(
                      (value, position) => <p>
                      Value: {value.id}
                      Position: {position}
                      </p>)
                 }
                </h5>
            </div>
        )
    }
}


export {StateExampleCheck, DerivedClass}


// Map should be user for Arrays / Array of Objects for multiple Iterations
// Map Object Keys should have same data type for iteration otherwise the last object key value will come