import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import UpdateProfileModal from "./UpdateProfileModal";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getUserInfo } from "../../actions/updateProfile";
import { useUserData } from "../shared/useUserData";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [isModal, setIsModal] = useState(false);
  // let data;
  const profile = useSelector((state) => ({ ...state.profile }));
  console.log(profile);
  const updateProfileHandler = () => {
    setIsModal(!isModal);
  };
  const _getUserInfo = useUserData();

  const logout = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    _getUserInfo();
  }, []);

  return (
    <>
      {isModal && <UpdateProfileModal show={isModal} />}
      <Container className="mt-4 pt-5">
        <Row className="d-flex justify-content-center align-items-center h-100  ">
          <Col md={{ span: 8, offset: 0 }}>
            <Card
              className="d-flex flex-row justify-content-between"
              style={{ border: "none" }}
            >
              <Card.Body className="p-4 flex-shrink-0">
                <Card.Img
                  src={
                    profile.avatar === null
                      ? "/instagram/uploads/avatars/Capture11d152ac-56fd-4207-bd04-851f7f41bc26.PNG"
                      : profile.avatar
                  }
                  alt="Generic placeholder"
                  className="img-fluid"
                  style={{
                    width: "250px",
                    height: "220px",
                    borderRadius: "50%",
                  }}
                />
              </Card.Body>
              <Container className="d-flex flex-column align-items-start p-4 flex-shrink-0">
                <Card.Title className="mt-5 mb-3 fs-2 ">
                  {profile.userName}
                </Card.Title>
                <Col className="d-flex flex-row gap-3">
                  <Card.Text>
                    <span className="me-1">{profile.posts.length}</span>
                    <span className="small text-muted mb-1">Posts</span>
                  </Card.Text>
                  <Card.Text>
                    <span className="me-1">{profile.followers.length}</span>
                    <span className="small text-muted mb-1">Following</span>
                  </Card.Text>
                </Col>
                <Col className="d-flex flex-row gap-3 mb-5 ">
                  <Button
                    variant="outline-primary"
                    className="align-self-center flex-grow-1"
                    style={{ padding: "6px 25px" }}
                    onClick={updateProfileHandler}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="align-self-center flex-grow-1"
                    onClick={logout}
                  >
                    Log Out
                  </Button>
                </Col>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UserProfile;
