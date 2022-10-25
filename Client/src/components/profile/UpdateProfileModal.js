import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/updateProfile";
import { useUserData } from "../shared/useUserData";

const UpdateProfileModal = (props) => {
  const profile = useSelector((state) => ({ ...state.profile }));
  const [show, setShow] = useState(true);
  const [fullName, setFullName] = useState(profile?.fullName);
  const [email, setEmail] = useState(profile?.email);
  const [gender, setGender] = useState(profile?.gender);
  const [userName, setUserName] = useState(profile?.userName);
  const [avatar, setAvatar] = useState(profile?.avatar);
  const [password, setPassword] = useState(profile?.password);

  const updatedData = new FormData();
  updatedData.append("fullName", fullName);
  updatedData.append("email", email);
  updatedData.append("gender", gender);
  updatedData.append("userName", userName);
  updatedData.append("password", password);
  updatedData.append("avatar", avatar);
  const _getUserInfo = useUserData();

  const handleClose = async (e) => {
    e.preventDefault();
    // const file = e.target.files[0];
    // if (file) {
    //   setAvatar(file);
    // }

    try {
      const res = await updateProfile(updatedData, profile.id);
      console.log(res);
      _getUserInfo();
    } catch (e) {
      console.log(e);
    }
    setShow(!show);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
    }
  };
  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleClose}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={fullName || ""}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={userName || ""}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gender</Form.Label>
              <Form.Check
                type="radio"
                name="gender"
                label="Female"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <Form.Check
                type="radio"
                name="gender"
                label="Male"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
              />
              {avatar && (
                <img
                  src="../../../instagram/uploads/avatars/Capture11d152ac-56fd-4207-bd04-851f7f41bc26.PNG"
                  style={{ width: 75, height: 75, cursor: "pointer" }}
                  className="me-3"
                />
              )}
              <Form.Label>Change profile photo</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UpdateProfileModal;
