import './style.css';
import background from "../../images/portfolio-background.jpg"
import imageOne from "../../images/tyl.PNG"
import imageTwo from "../../images/rec-app.png"
import imageThree from "../../images/employee-directory.PNG"
import imageFour from "../../images/fitness-tracker.PNG"
import imageFive from "../../images/budget-tracker.PNG"
import imageSix from "../../images/team-builder.PNG"

const Portfolio = () => {
  return (
    <>
      <div class="background" style={style.background}>
        <div class="title text-center">
          <h1 class="display-4">Portfolio Page</h1>
        </div>
        <div className="portfolio">
          <div class="portfolio-card">
            <div class="portfolio-item">
              <img src={imageOne} alt="portfolio-item"/>
            </div>
          </div>
          <div class="portfolio-card">
            <div class="portfolio-item" style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img src={imageTwo} alt="portfolio-item" style={{ width: "45%" }}/>
            </div>
          </div>
          <div class="portfolio-card">
            <div class="portfolio-item">
              <img src={imageThree} alt="portfolio-item"/>
            </div>
          </div>
          <div class="portfolio-card">
            <div class="portfolio-item">
              <img src={imageFour} alt="portfolio-item"/>
            </div>
          </div>
          <div class="portfolio-card">
            <div class="portfolio-item">
              <img src={imageFive} alt="portfolio-item"/>
            </div>
          </div>
          <div class="portfolio-card">
            <div class="portfolio-item">
              <img src={imageSix} alt="portfolio-item" style={{ height: "70%" }}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const style = {
  background: {
    backgroundImage: `url(${background})`, 
    height: "71rem", 
    backgroundSize: "cover" 
  }
}

export default Portfolio
