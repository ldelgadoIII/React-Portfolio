import './style.css';
import background from "../../images/portfolio-background.jpg"
import PortfolioCard from "../../components/PortfolioCard"
import imageOne from "../../images/tyl.PNG"
import imageTwo from "../../images/rec-app.png"
import imageThree from "../../images/employee-directory.PNG"
import imageFive from "../../images/budget-tracker.PNG"
import trowel from "../../images/Trowel.png"
import googleBooks from "../../images/googleBooks.png"

const Portfolio = () => {
  const apps = [
    {
      image: imageOne,
      github: "https://github.com/ldelgadoIII/Task-Ya-Later",
      deploy: "https://project-two-ljm.herokuapp.com/",
      style: {
        display: "flex", 
        justifyContent: "space-evenly"
        },
      imgStyle: {}
    },
    {
      image: trowel,
      github: "https://github.com/benrgross/Trowel",
      deploy: "https://trowel-app.herokuapp.com/",
      style: {},
      imgStyle: {}
    },
    {
      image: imageThree,
      github: "https://github.com/ldelgadoIII/Directory-App",
      deploy: "https://ldelgadoiii.github.io/Directory-App/",
      style: {},
      imgStyle: {}
    },
    {
      image: googleBooks,
      github: "https://github.com/ldelgadoIII/Google-Books-Search-Engine",
      deploy: "https://books-search-engine-ld3.herokuapp.com/",
      style: {},
      imgStyle: {}
    },
    {
      image: imageTwo,
      github: "https://github.com/jimbopulos/rec-app",
      deploy: "https://jimbopulos.github.io/rec-app/",
      style: { 
        alignItems: "center"
      },
      imgStyle: { 
        width: "45%" 
      }
    },
    {
      image: imageFive,
      github: "https://github.com/ldelgadoIII/Budget-Tracker",
      deploy: "https://budget-tracker-ld3.herokuapp.com/",
      style: {},
      imgStyle: {}
    },
  ]

  return (
    <>
      <div class="background" style={style.background}>
        <div class="title text-center">
          <h1 class="display-4">Portfolio Page</h1>
        </div>
        <div className="portfolio">
          {apps.map(({ style, image, imgStyle, github, deploy }) => <PortfolioCard style={style} img={image} imgStyle={imgStyle} github={github} website={deploy} />)}
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
