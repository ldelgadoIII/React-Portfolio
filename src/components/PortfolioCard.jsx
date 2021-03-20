import React from 'react'
import imageOne from "../images/tyl.PNG"

const PortfolioCard = () => {
    return (
        <div class="portfolio-card">
            <div class="portfolio-item">
              <img src={imageOne} alt="portfolio-item"/>
            </div>
        </div>
    )
}

export default PortfolioCard
