import "./style/welcome.css";
import frontImage from "../assets/front-image2.png"


const Welcome = () => {
  return (
    <div id="welcome" className="welcome-container">

      <h1 id="title">
        STUDY <br></br>BUDDY
      </h1>
      <img src="logo.png" alt="Company Logo" className="logo" />
      <img src={frontImage} id="front-image" />
      <p id="desc">
        A platfrom where we help you with study to <br></br>achieve remarkable
        academic achivement
      </p>
      <button className="buton-login">LOGIN</button>
      <button className="buton-login" id="signUp">SIGN UP</button>
    </div>
  );
  
};

export default Welcome;
