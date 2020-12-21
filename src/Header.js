import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import BussinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user  =  useSelector(selectUser)
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="Mynetwork" />
        <HeaderOptions Icon={BussinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          // avatar={user?.photoUrl=== null ? user?.email[0] : user?.photoUrl}
          avatar={true}
          title="Me"
          onClick={logoutApp}
        />
      </div>
    </div>
  );
}

export default Header;
