import React, { useState, useEffect } from "react";
import { ImImage, ImImages } from "react-icons/im";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";
import { Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { MDBTextArea } from "mdb-react-ui-kit";
import { addPost } from "../actions/posts";
import { useNavigate } from "react-router";
import { usePostData } from "../components/shared/UsePostData";

const CreatePost = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const addedPostData = new FormData();
  addedPostData.append("image", image);
  addedPostData.append("title", title);

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image) {
      setImage(image);
    }
  };

  let getPosts = usePostData();
  
  const addPostHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await addPost(addedPostData);
      if (res.data) {
        navigate("/mypage");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Card className="post-card" style={{ padding: "10px" }}>
      <Card.Header className="mt-2">
        <Card.Title className="text-center">Create New Post</Card.Title>
      </Card.Header>
      <Card.Body className="text-center card-icon d-flex flex-column align-items-center">
        <Image
          src={`${process.env.REACT_APP_API}/${image}`}
          style={{ width: 100, height: 100, cursor: "pointer" }}
          className="mb-2"
        />
        <Card.Title className="text-center muted small">
          Drag your photos here
        </Card.Title>
        <Form.Group controlId="formFile">
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleChange}
            style={{ display: "none" }}
          />

          <Form.Label style={{ cursor: "pointer" }}>
            <p className="nav-link choose-image">Choose From Gallery</p>
          </Form.Label>
        </Form.Group>
        <MDBTextArea
          placeholder="Add description"
          maxLength="405"
          id="textAreaExample"
          rows={4}
          style={{
            backgroundColor: "#fff",
            minHeight: "100px",
            maxHeight: "inherit",
          }}
          onChange={(e) => setTitle(e.target.value)}
          wrapperClass="w-100"
          className="mb-4"
          value={title}
        />
        <Button onClick={addPostHandler}>Add to posts</Button>
      </Card.Body>
    </Card>
  );
};

export default CreatePost;
