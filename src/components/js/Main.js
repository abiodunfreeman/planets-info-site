import React from 'react'
import "../css/main.css"
export default function Main(props) {
  const {data} = props
  let primaryColor;
  
  if (window.innerWidth <= 450){
     return (
      <div id="main">
        <div id="tabs">
          <h3>OVERVIEW</h3>
          <h3>STRUCTURE</h3>
          <h3>SURFACE</h3>
        </div>
       
      </div>
    )
  } else if (window.innerWidth <= 800){
    return (
      <div id="main">
        tablet
      </div>
    )
  } else {
    return (
      <div id="main">
        Desktop
        </div>
    )
  }
}
