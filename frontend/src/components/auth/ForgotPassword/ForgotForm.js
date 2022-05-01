import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { buttonStyles } from "../../layout/compnentStyles";

const ForgotForm = ({ role }) => {
  const navigate = useNavigate();
  const alert = useAlert();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/search/project");
    }
  }, [user, navigate]);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    forgot(role);
  };

  const forgot = async (role) => {
    const urlPath = role === "job hunter" ? "users" : "recruiters";
    try {
      setLoading(true);
      const response = await axios.post(`/api/v1/${urlPath}/forgotPassword`, {
        email,
      });
      setEmail("");
      setLoading(false);
      if (response.data.status === "success")
        alert.success(response.data.message);
    } catch (error) {
      setLoading(false);
      setEmail("");

      alert.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
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
          "Send Email"
        )}
      </Button>
    </form>
  );
};

export default ForgotForm;
