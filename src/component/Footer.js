import React from "react";
import Twitter from "../images/icons/twitter.png";
import Facebook from '../images/icons/facebook.png';
import Instagram from '../images/icons/instagram.png';
import Github from '../images/icons/github.png';

export default function Footer(){
    return(
        <div className="footer">
        <a href="https://www.twitter.com" target="__blank">
          <img src={Twitter} className="footer-twitter" alt='icon' />
        </a>
        <a href="https://www.facebook.com" target="__blank">
          <img src={Facebook} className="footer-facebook" alt='icon' />
        </a>
        <a href="https://www.instagram.com" target="__blank">
          <img src={Instagram} className="footer-instagram" alt='icon' />
        </a>
        <a href="https://www.github.com" target="__blank">
          <img src={Github} className="footer-github" alt='icon' />
        </a>
      </div>
    );
}