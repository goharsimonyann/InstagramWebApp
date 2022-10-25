import React from "react";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyPost = (props) => {
  return (
    <Col md={{ span: 3, offset: 1 }} className="d-flex gap-3 p-3 mt-3">
      <Link
        to={`/mypage/${props.id}`}
        className="text-decoration-none text-dark"
      >
        <Image className=" w-100 h-100" url={props.image} />
        <div>{props.title}</div>
      </Link>
    </Col>
  );
};

export default MyPost;
