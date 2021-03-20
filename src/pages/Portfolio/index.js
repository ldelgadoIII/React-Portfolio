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
      github: "https://github.com/ldelgadoIII/Task-Ya-Later",
      deploy: "https://project-two-ljm.herokuapp.com/",
      style: {
        display: "flex", 
        justifyContent: "space-evenly"
        },
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
      image: imageThree,
      github: "https://github.com/ldelgadoIII/Employee-Directory",
      deploy: "https://ldelgadoiii.github.io/Employee-Directory/",
      style: {},
      imgStyle: {}
    },
    {
      image: imageFour,
      github: "https://github.com/ldelgadoIII/Fitness-Tracker",
      deploy: "https://fitness-tracker-ld3.herokuapp.com/?id=6043984d7d10620015ea9f9e",
      style: {},
      imgStyle: {}
    },
    {
      image: imageFive,
      github: "https://github.com/ldelgadoIII/Budget-Tracker",
      deploy: "https://budget-tracker-ld3.herokuapp.com/",
      style: {},
      imgStyle: {}
    },
    {
      image: imageSix,
      github: "https://github.com/ldelgadoIII/Team-Profile-Generator",
      deploy: "https://github.com/ldelgadoIII/Team-Profile-Generator",
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
