import './style.css';
import background from "../../images/phone-background.jpg"

const Contact = () => {
    return (
        <>
          <div class="background" style={style}>
            <div class="contact text-center">
              <h1 class="display-4">Contact Page</h1>
              <h2 class="email">
                <a href="mailto:LDelgadoTheThird@gmail.com" style={{color: "black"}}>
                  Email: LDelgadoTheThird@gmail.com
                </a>
              </h2>
              <h2>
                <a href="https://github.com/ldelgadoIII" target="\_blank" style={{color: "black"}}>
                  Github: github.com/ldelgadoIII
                </a>
              </h2>
              <h2>
                <a href="https://instagram.com/loretsdthree" target="\_blank" style={{color: "black"}}>
                  Instagram: instagram.com/loretsdthree
                </a>
              </h2>
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
