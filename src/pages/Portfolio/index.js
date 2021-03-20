import './style.css';
import background from "../../images/portfolio-background.jpg"


const Portfolio = () => {
  return (
    <>
      <div class="background" style={style}>
        <div class="title text-center">
          <h1 class="display-4">Portfolio Page</h1>
        </div>
        <div className="portfolio">
          <div class="portfolio-card" style={{ width: "18rem"}}>
            <div class="portfolio-item">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="\#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="portfolio-card" style={{ width: "18rem"}}>
            <div class="portfolio-item">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="\#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="portfolio-card" style={{ width: "18rem"}}>
            <div class="portfolio-item">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="\#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="portfolio-card" style={{ width: "18rem"}}>
            <div class="portfolio-item">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="\#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
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
