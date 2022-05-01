import React from "react";
import forgotImage from "../../../assets/forgotPassword.webp";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPassword = ({ type }) => {
  return (
    <section className='hero-section'>
      <div className='hero' style={{ gap: 0 }}>
        <div className='hero-img'>
          <img
            src={forgotImage}
            className='hero-img'
            style={{ width: "100%" }}
            alt=''
          />
        </div>
        <div className='hero-auth' style={{ alignSelf: "center" }}>
          <div className='hero-form' style={{ width: "140%" }}>
            <ResetPasswordForm type={type} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
