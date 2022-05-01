import React from "react";
import { Link } from "react-router-dom";

const NotAuthenticatedNavbar = () => {
  return (
    <>
      <Link to='/signup' className='underline'>
        Signup
      </Link>
      <Link to='/login'>
        <button className='btn'>Login</button>
      </Link>
    </>
  );
};

export default NotAuthenticatedNavbar;
