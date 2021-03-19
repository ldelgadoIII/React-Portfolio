import React from 'react'
import background from "../images/portfolio-background.jpg"


const Portfolio = () => {
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
height: "34rem", 
backgroundSize: "cover" 
}

export default Portfolio
