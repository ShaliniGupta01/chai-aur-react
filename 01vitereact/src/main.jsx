import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//function MyApp(){
  //return(
    //<div>
      //<h1>Custom App!</h1>
    //</div>
  //)

//}



const anotherUser = "chai aur code"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)
// evaualted experession (variable inexact)

//const anotherElement = (
  //<a href="https://google.com" target='_blank'>Visit google</a>
//)



ReactDOM.createRoot(document.getElementById('root')).
render(
  
    //<App/>
    //anotherElement
   reactElement

  
)
