import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import "./SinglePost.css";
import { RiHeart3Line } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import ReadMore from "../ReadMore";
import EmojiPicker from "../EmojiPicker";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);

  return (
    <Card className="mt-4 d-flex justify-content-center align-items">
      <Card.Header className="d-flex justify-content-between align-items-center fw-bolder">
        <Card.Title className="d-flex align-items-center gap-2 m-0">
          <Card.Img
            variant="left"
            src="https://via.placeholder.com/42"
            className="rounded-circle pointer op-07"
          />
          <Card.Link
            href="#"
            className="fs-6 text-decoration-none text-dark op-07"
          >
            {props.userName}
          </Card.Link>
        </Card.Title>
        <Card.Text className="pointer mr-5 op-07">. . .</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Img src="https://via.placeholder.com/300" />
      </Card.Body>
      <Card.Footer>
        <Card.Title className="d-flex justify-content-start align-items-center pointer">
          <RiHeart3Line
            className="mr-10 op-07"
            size={30}
            onClick={() => setLikeCount(likeCount + 1)}
          />
          <FaRegComment size={26} className="op-07" />
        </Card.Title>
        <Card.Title className="d-flex justify-content-start align-items-center pointer">
          {likeCount} likes
        </Card.Title>

        <ReadMore className="txt-style">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </ReadMore>
        {comments && comments.length ? (
          <Card.Title className="d-flex justify-content-start align-items-center pointer">
            {likeCount} likes
          </Card.Title>
        ) : (
          ""
        )}
        <Card.Title>
          <Link to="/" className="comment-link">
            View all comments
          </Link>
        </Card.Title>
        <Card.Title>
          <InputGroup size="sm" className="mb-3 d-flex align-items-center">
            <EmojiPicker />
          </InputGroup>
        </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default SinglePost;
