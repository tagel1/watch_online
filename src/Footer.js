import React from "react";
import './Footer.css';

import { Anchor } from 'antd';
const { Link } = Anchor;


const Footer = () => {

  return (

    <div className="footer-dark">
      <div className="container">
        <div className="row">
          <ul className="flex-container">
            <li><a href="/"> אודות </a></li>
            <li><a href="/">מדיניות האתר</a></li>
            <li><a href="/">תקנון האתר</a></li>
            <li><a href="/">צור קשר</a></li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Footer;