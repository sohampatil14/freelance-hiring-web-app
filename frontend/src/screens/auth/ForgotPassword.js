import React, { useState } from "react";
import "../../AuthPages.css";
import forgotImage from "../../assets/forgotPassword.webp";
import ForgotToggle from "../../components/auth/ForgotPassword/ForgotToggle";
import ForgotForm from "../../components/auth/ForgotPassword/ForgotForm";

const Login = () => {
  const [role, setRole] = useState("job hunter");

  const handleRoleChange = (text) => {
    setRole(text);
  };

  return (
    <section className='hero-section'>
      <div className='hero' style={{ gap: 0 }}>
        <div className='hero-img'>
          <img
            src={forgotImage}
            className='hero-img'
            style={{ width: "90%" }}
            alt=''
          />
        </div>
        <div className='hero-auth'>
          <div className='hero-form'>
            <ForgotToggle handleRoleChange={handleRoleChange} role={role} />
            <ForgotForm role={role} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
