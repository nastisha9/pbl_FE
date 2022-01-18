import React from 'react';
import "./header.scss";
import image from "./grL.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
          <span className="headerTitleBig">Blog</span>
      </div>
      <img className="headerImg" src={image} alt="" />
    </div>
  )
};

export default Header;