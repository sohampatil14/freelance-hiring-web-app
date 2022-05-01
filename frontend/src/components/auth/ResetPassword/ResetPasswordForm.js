import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { buttonStyles } from "../../layout/compnentStyles";

const ResetPasswordForm = ({ type }) => {
  let { token } = useParams();

  console.log(type);

  const alert = useAlert();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert.error("Passwords don't match");
    }

    reset(type);
  };

  const resetFields = () => {
    setFormData((prevState) => ({
      ...prevState,
      password: "",
      confirmPassword: "",
    }));
  };

  const reset = async () => {
    const urlPath = type === "jobHunter" ? "users" : "recruiters";
    try {
      setLoading(true);
      const response = await axios.patch(
        `/api/v1/${urlPath}/resetPassword/${token}`,
        {
          password: formData.password,
        }
      );
      resetFields();
      setLoading(false);
      if (response.data.status === "success")
        alert.success(response.data.message);
    } catch (error) {
      setLoading(false);
      resetFields();
      alert.error(error.response.data.message);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1 className='reset_password'>Reset Password</h1>
      <form onSubmit={submitHandler}>
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={formData.password}
          onChange={onChange}
          required
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={onChange}
          style={{ marginBottom: "1rem" }}
          required
        />
        <Button
          type='submit'
          sx={buttonStyles}
          variant='contained'
          disabled={loading}>
          {loading ? (
            <CircularProgress size='2.4rem' color='grey' />
          ) : (
            "Reset Password"
          )}
        </Button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
