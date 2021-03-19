import React from 'react'
import background from "../images/portfolio-background.jpg"


const Portfolio = () => {
  return (
    <>
      <div class="background" style={style}>
        <div class="welcome text-center">
          <h1 class="display-4">Portfolio Page</h1>
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

export default Portfolio
