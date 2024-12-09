import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ReactTyped } from "react-typed";
import Avater from '../assets/images/avater.jpg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img 
            src= {Avater }
            alt="Avatar" 
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/danfordChris/" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/danford-chriss-438364240" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://x.com/Co24669" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/royz_chriss/" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </div>
          <h1>Danford Chriss</h1>
          <p>
        I'm{" "}
        <ReactTyped
          strings={[ "Full Stack Developer",
            "DevOps Engineer",
            "Mobile Developer",
            "ML/AI Enthusiast"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=""
          showCursor={true}
        />
      </p>
          <div className="resume-button">
            <a 
              href="https://drive.google.com/file/d/1u4WHQJ28bDVbg9RLs8br8W0j5ee4bePt/view?usp=drive_link" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
