import React from 'react'

const PortfolioCard = ({ style, img, imgStyle, github, website }) => {
    return (
        <div class="portfolio-card">
            <div class="portfolio-item" style={style}>
              <img src={img} alt="portfolio-item" style={imgStyle}/>
              <a href={github} target="\_blank">
                <button class="github">GitHub</button>
              </a>
            <a href={website} target="\_blank">
              <button class="website">Website</button>
            </a>
            </div>
        </div>
    )
}

export default PortfolioCard
