import React from 'react'
import background from "../images/phone-background.jpg"

const Contact = () => {
    return (
        <>
          <div class="background" style={style}>
            <div class="welcome text-center">
              <h1 class="display-4">Contact Page</h1>
              <p class="lead">Websites made fast and fun!</p>
            </div>
          </div>
        </>
    )
}

const style = {
  backgroundImage: `url(${background})`, 
  height: "55rem", 
  backgroundSize: "cover" 
}

export default Contact
