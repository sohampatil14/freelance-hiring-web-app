import React, { useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth/authSlice";
import { Link } from "react-router-dom";
import DefaultImage from "../../../assets/default.jpg";
import NotficationPanel from "../../Notification/NotficationPanel";
import { getNotifications } from "../../../store/notifications/notificatonSlice";

const AuthenticatedNavbar = ({ currentUser }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout(currentUser));
  };

  const userImage = currentUser.photo?.url
    ? currentUser.photo?.url
    : DefaultImage;

  useEffect(() => {
    if (currentUser.role === "job hunter") {
      dispatch(getNotifications());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <>
      <NotficationPanel />
      <Menu>
        <MenuButton>
          <Avatar
            size='md'
            cursor='pointer'
            name={currentUser.name}
            src={userImage}
          />
        </MenuButton>
        <MenuList>
          <Link to='/profile'>
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem>My Collections</MenuItem>
          <MenuDivider />
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default AuthenticatedNavbar;
