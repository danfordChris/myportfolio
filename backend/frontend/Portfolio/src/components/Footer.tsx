import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/Footer.css'

function Footer() {
  return (
    <footer>
      <div>
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
      <p>A portfolio designed & built by <a href="https://github.com/danfordChris/" target="_blank" rel="noreferrer">Danford Chriss</a> with 💜🚘️</p>
    </footer>
  );
}

export default Footer;