import React from "react";
import "../../styles/footer.scss";
import grorapidImage from '../../utils/images/grorapid.png'
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Twitter, } from '@material-ui/icons';

const Footer = (props) => {
  return (
    <footer className="footer-section">
      <div className='row'>
        <div className='col-md-6 column-first'>
          <img src={grorapidImage} alt='grorapid'/>
          <p>© Copyright 2020 - Grorapid. All rights reserved</p>
        </div>
        <div className='col-md-6 column-second'>
          <div className='terms-privacy'>
            <p>Terms & Condition</p><p>Privacy</p>
          </div>
          <div className='icons-list'>
            <ul>
            <a href="#home"><FacebookIcon/></a>
            <a href="#features"><InstagramIcon/></a>
            <a href="#pricing"><Twitter/></a>
            <a href="#features"><YouTubeIcon/></a>
            </ul>
          </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
