import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { reset, signup } from "../../../store/auth/authSlice";
import { buttonStyles } from "../../layout/compnentStyles";

const JobHunterSignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert.error(message);
    }

    if (isSuccess) {
      return navigate("/profile", {
        state: {
          previousRoute: "signup",
        },
      });
    }

    if (user) {
      navigate("/search/project");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, navigate, message, dispatch, alert]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword)
      return alert.error("Passwords don't match");

    const data = {
      name,
      email,
      password,
      role: "job hunter",
    };

    dispatch(signup(data));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='Name'
        name='name'
        onChange={onChange}
        required
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        onChange={onChange}
        required
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        onChange={onChange}
        minLength='8'
        required
      />
      <input
        type='password'
        placeholder='Confirm Password'
        name='confirmPassword'
        style={{ marginBottom: "1.4rem" }}
        onChange={onChange}
        minLength='8'
        required
      />
      <Button
        type='submit'
        sx={buttonStyles}
        variant='contained'
        disabled={isLoading}>
        {isLoading ? <CircularProgress size='2.4rem' color='grey' /> : "Signup"}
      </Button>
      <Link to='/login' className='link signup_cta'>
        Have an account?
        <span className='signup_cta__span'>Login</span>
      </Link>
    </form>
  );
};

export default JobHunterSignupForm;
