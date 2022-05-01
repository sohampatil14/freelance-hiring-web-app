import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../../../store/auth/authSlice";
import { buttonStyles } from "../../layout/compnentStyles";

const LoginForm = ({ role }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert.error(message);
    }

    if (isSuccess || user) {
      navigate("/search/project");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch, alert]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    formData.role = role;
    dispatch(login(formData));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={formData.email}
        onChange={onChange}
        required
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        value={formData.password}
        onChange={onChange}
        required
      />
      <Link to='/forgotPassword' className='link forgot'>
        Forgot password?
      </Link>
      <Button
        type='submit'
        sx={buttonStyles}
        variant='contained'
        disabled={isLoading}>
        {isLoading ? <CircularProgress size='2.4rem' color='grey' /> : "Login"}
      </Button>
      <Link to='/signup' className='link signup_cta'>
        Don’t have an account?
        <span className='signup_cta__span'>Sign up</span>
      </Link>
    </form>
  );
};

export default LoginForm;
