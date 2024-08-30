import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return (
    <div>
      <h1>Custom Function</h1>
      <p>(A + B)^2 = A^2 + B^2 +2*A*B</p>
    </div>
  )
}   // we try returning the html in the same file in whixh it is being rendered 

const AnotherElement = (
  <div>Custom another element </div>
) // we try directly returning the html instead of in form of function 

// whenevr we return a html the react parses that into an object which is understandable by it .So what if we directly send a object will it execute => NO it will not as we don't know what it accepts in object the names of keys thus we cannot return an object .

// We can create an element via createElement which is a property provided by react which creates a html element and we can use it the same way we use jsx .

const anotherUser = 'Jai Mata Di'

const CreatedElemnt = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'Click me to visit google',
  anotherUser // we just added a parameter in the children
)

ReactDom.createRoot(document.getElementById('root')).render(
    //  <Myapp />   // It can also be executed as `Myapp()`
    //  <AnotherElement/> // this way it will not executed 
    // AnotherElement  // Now it can be executed
    // CreatedElemnt 
    <App />
)
