import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../actions/auth/auth";
import LeftSide from "./LeftSide";

//////  BOOTSTRAP //////////
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
////////////////////////////

const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("MALE");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        userName,
        password,
        fullName,
        email,
        gender,
      });
      if (res.data) {
        navigate("/");
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsValidForm(
        email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
          password.length >= 8 &&
          /((?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]))/.test(password)
      );
    });

    return () => clearTimeout(timer);
  }, [email, password]);

  return (
    <Container className="mt-100">
      <Row>
        <Col md={{ span: 6, offset: 1 }} className="me-5">
          <LeftSide />
        </Col>

        <Col md={3} className="mt-4">
          <div className="navbar-brand logo" style={{ cursor: "pointer" }}>
            <img
              width="175px"
              height="51px"
              src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
              alt="Logo"
              className="op-07"
            />
          </div>

          <Form onSubmit={registerHandler}>
            <Form.Group className="mb-2">
              <Form.Control
                type="email"
                className="fs-12 mt-5"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                className="fs-12 "
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                className="fs-12 "
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

            <Form.Group style={{ padding: "7px 10px 0" }}>
              <p>Please choose your gender: </p>
              <Form.Check
                type="radio"
                name="gender"
                label="Female"
                value={gender}
                onChange={() => setGender("FEMALE")}
              />
              <Form.Check
                type="radio"
                name="gender"
                label="Male"
                value={gender}
                onChange={() => setGender("MALE")}
              />
            </Form.Group>

            <Button
              variant="primary"
              size="mall"
              type="submit"
              className="w-100 mt-3"
              disabled={!isValidForm}
            >
              Sign up
            </Button>
          </Form>
          <div className="register-box mt-4">
            <span>
              Have an account? <Link to="/">Log in</Link>
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Register;
