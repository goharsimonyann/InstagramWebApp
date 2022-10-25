import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../actions/auth/auth";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ userName, password });
      if (res.data) {
        window.localStorage.setItem(
          "token",
          JSON.stringify(res.data.token.token)
        );
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        navigate("/home");
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsValidForm(
        password.length >= 8 &&
          /((?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]))/.test(password)
      );
    });

    return () => clearTimeout(timer);
  }, [password]);

  return (
    <>
      <div className="navbar-brand logo" style={{ cursor: "pointer" }}>
        <img
          width="175px"
          height="51px"
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
          alt="Logo"
          className="op-07"
        />
      </div>

      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            className="fs-12 mt-5"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            type="password"
            className="fs-12"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          size="mall"
          type="submit"
          className="w-100 mt-3"
          disabled={!isValidForm}
        >
          Sign in
        </Button>
      </Form>
      <div className="register-box mt-4">
        <span>
          Don't have an account? <Link to="/register">Sign up</Link>
        </span>
      </div>
    </>
  );
};

export default LoginForm;
