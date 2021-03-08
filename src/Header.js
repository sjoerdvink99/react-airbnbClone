import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { ExpandMore, Language, SearchOutlined } from "@material-ui/icons";

export default function Header() {
  return (
    <div className='header'>
      <img
        className='header__icon'
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png'
        alt='AirBNB Logo'
      />
      <div className='header__center'>
        <input placeholder='Search for accomodations' type='text' />
        <SearchOutlined />
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}
