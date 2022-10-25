import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SinglePost from "./SinglePost";
import { useSelector } from "react-redux";
const HomePage = () => {
  // const _posts = useSelector((state) => [...state.profile.posts]);
  // const _followers = useSelector((state) => [...state.profile.followers]);

  // console.log("follow", _followers);
  // console.log("post", _posts);
  return (
    <>
      <Container>
        <Row className="mt-5">
          {[...Array(8)].map((flw, i) => {
            return (
              <Col key={i} md={{ span: 6, offset: 3 }} className="f-nowrap">
                {/* <Link
                  to={`/posts/${i}`}
                  className="text-decoration-none text-dark"
                > */}
                <SinglePost />
                {/* </Link> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
