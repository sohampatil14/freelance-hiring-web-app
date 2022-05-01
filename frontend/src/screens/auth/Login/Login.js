import React, { useState } from "react";
import "../../../AuthPages.css";
import LoginForm from "../../../components/auth/Login/LoginForm";
import LoginToggle from "../../../components/auth/Login/LoginToggle";
import LoginSignupImage from "../../../components/auth/LoginSignupImage";

const Login = () => {
  const [role, setRole] = useState("job hunter");

  const handleRoleChange = (text) => {
    setRole(text);
  };

  return (
    <section className='hero-section'>
      <div className='hero'>
        <LoginSignupImage />
        <div className='hero-auth'>
          <div className='hero-form'>
            <LoginToggle handleRoleChange={handleRoleChange} role={role} />
            <LoginForm role={role} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
