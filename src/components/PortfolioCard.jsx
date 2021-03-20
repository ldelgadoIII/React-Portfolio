import React from 'react'

const PortfolioCard = ({ style, img, imgStyle }) => {
    return (
        <div class="portfolio-card">
            <div class="portfolio-item" style={style}>
              <img src={img} alt="portfolio-item" style={imgStyle}/>
            </div>
        </div>
    )
}

export default PortfolioCard
