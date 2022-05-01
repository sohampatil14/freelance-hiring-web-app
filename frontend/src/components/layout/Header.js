import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import AuthenticatedNavbar from "./Navbar/AuthenticatedNavbar";
import NotAuthenticatedNavbar from "./Navbar/NotAuthenticatedNavbar";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className='header'>
      <div className='nav-left'>
        <Link to='/' className='logo'>
          Logo
        </Link>
        <Link to='/search/project'>Explore Work</Link>
        <Link to='/search/users'>Search Job Hunters</Link>
      </div>
      <div className='nav-right'>
        {user ? (
          <ChakraProvider>
            <AuthenticatedNavbar currentUser={user} />
          </ChakraProvider>
        ) : (
          <NotAuthenticatedNavbar />
        )}
      </div>
    </header>
  );
};

export default Header;
