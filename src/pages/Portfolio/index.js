import './style.css';
import background from "../../images/portfolio-background.jpg"
import PortfolioCard from "../../components/PortfolioCard"
import imageOne from "../../images/tyl.PNG"
import imageTwo from "../../images/rec-app.png"
import imageThree from "../../images/employee-directory.PNG"
import imageFour from "../../images/fitness-tracker.PNG"
import imageFive from "../../images/budget-tracker.PNG"
import imageSix from "../../images/team-builder.PNG"

const Portfolio = () => {
  const apps = [
    {
      image: imageOne,
      github: "",
      deploy: "",
      style: {
        display: "flex", 
        justifyContent: "space-evenly"
        },
      imgStyle: {}
    },
    {
      image: imageTwo,
      github: "",
      deploy: "",
      style: {
        display: "flex", 
        justifyContent: "space-evenly"
        },
      imgStyle: { 
        width: "45%" 
      }
    },
    {
      image: imageThree,
      github: "",
      deploy: "",
      style: {},
      imgStyle: {}
    },
    {
      image: imageFour,
      github: "",
      deploy: "",
      style: {},
      imgStyle: {}
    },
    {
      image: imageFive,
      github: "",
      deploy: "",
      style: {},
      imgStyle: {}
    },
    {
      image: imageSix,
      github: "",
      deploy: "",
      style: {},
      imgStyle: { 
        height: "70%" 
      }
    },
  ]

  return (
    <>
      <div class="background" style={style.background}>
        <div class="title text-center">
          <h1 class="display-4">Portfolio Page</h1>
        </div>
        <div className="portfolio">
          {apps.map(({ style, image, imgStyle }) => <PortfolioCard style={style} img={image} imgStyle={imgStyle}/>)}
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
