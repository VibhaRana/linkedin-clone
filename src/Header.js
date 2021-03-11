import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

function Header() {
  return (
    <div className="header">
     
      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
        <div className="header__search">
            <SearchIcon />
            <input type = "text" />
        </div>
      </div>
      <div className="header__right">
          <HeaderOption Icon = {HomeIcon} title = 'Home'/>
          <HeaderOption Icon = {SupervisorAccountIcon} title = 'My Network'/>
          <HeaderOption Icon = {BusinessCenterIcon} title = 'My Jobs' />
          <HeaderOption Icon = {ChatIcon} title = 'Messaging'/>
          <HeaderOption Icon = {NotificationsIcon} title ='Notifications'/>
          <HeaderOption avatar = '/resumeImage.jpg' title = 'me'/>
      </div>
    </div>
  );
}

export default Header;
