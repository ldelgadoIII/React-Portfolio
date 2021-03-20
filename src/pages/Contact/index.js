import './style.css';
import background from "../../images/phone-background.jpg"

const Contact = () => {
    return (
        <>
          <div class="background" style={style}>
            <div class="title text-center">
              <h1 class="display-4">Contact Page</h1>
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

export default Contact
