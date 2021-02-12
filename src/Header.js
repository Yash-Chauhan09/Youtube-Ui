import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
          <img
            className="header__logo"
            src="https://lh6.googleusercontent.com/proxy/MbUHQVgVX6ER_Y4akYYB5cNDRPa6E9DTsQBDjCch302Uuvn2Dqeco5f5eYBi0MZCjR1SZ3J0G4FSAy-sSOesXnXgUl02kTTgR_ZDdqv1bvLB9eVoyLTlBil_SpaCBv9Vn5gcfX5r3teNtuRIuxYEv8cvIpKQL3c=s0-d"
            alt="Logo"
          />
      </div>
      <div className="header__mid">
        <input
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <a target='_blank' href={`https://www.youtube.com/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
</a>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
