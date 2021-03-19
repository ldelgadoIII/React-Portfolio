import './pages.css';
import React from 'react'
import background from "../images/desk-background.jpg"

const Home = () => {
    return (
        <>
          <div class="background" style={style}>
            <div class="welcome text-center">
              <h1 class="display-4">Loreto V. Delgado III</h1>
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

export default Home
