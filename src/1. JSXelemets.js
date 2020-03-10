import React from 'react';

const NestedElements = () =>{

    return(
        <div>
            <h1> General JSX</h1>
            <p> 
            At W3Schools you will find complete references about tags, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, and more.
            </p>
        </div>
    )
}

const Attribute = ()=>{

    return(
        <div>
        <h1>Header</h1>
            <h2>Content</h2>
            <p data-myattribute = "somevalue">This is the content!!!</p>
        </div>
    )
}


// Javascript Expression
const Expression =()=>{

    var a = 10
    var b = 11
    var c,i = 0
        return(
            <div>
            {/* 1. General Expression with Data Binding*/}
             <h1>{c = a+b}</h1>
             <h2>{c}</h2> 

             {/* 2. Ternary Operator  */}
             <h1>{  i === 1 ? 'True!' : 'False'}</h1>


            </div>
        )
}

// 4.General Styling
const Styling=()=>{
    var myStyle = {
        fontSize: 100,
        color: '#FF0000'
    }
            return(
                    <div>
                            {/* style  => Mapping Attribute/Function = {} => Data Binding {} => Object with Key Value Pairs */}
                        <h1 style = { {color:'blue',fontSize:50} }> Heading Tag with Color</h1>
                        <h2 style= {myStyle} >Var MyStyle Object</h2>
                    </div>

            )

   } 


export {NestedElements, Attribute, Expression,Styling}

// Naming Convention
// HTML tags always use lowercase tag names, while React components start with Uppercase.
// Note − You should use className and htmlFor as XML attribute names instead of class and for.
// This is explained on React official page as −
// Since JSX is JavaScript, identifiers such as class and for are discouraged as XML attribute names. 
// Instead, React DOM components expect DOM property names such as className and htmlFor, respectively.


