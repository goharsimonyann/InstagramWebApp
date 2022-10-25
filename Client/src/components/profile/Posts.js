import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import { allPosts } from "../../actions/posts";\
import { useSelector } from "react-redux";
import MyPost from "./MyPost";
const Posts = () => {
  const postArr = useSelector((state) => [...state.profile.posts]);
  console.log("postarr:", postArr);
  // const showPost = async (e) => {
  //   try {
  //     let res = await allPosts();
  //     if (res.data) {
  //       // console.log(res.data);
  //       setPosts(res.data);
  //     }
  //   } catch (e) {
  //     toast.error("something went wrong");
  //   }
  // };

  // useEffect(() => {
  //   showPost();
  // }, []);
  return (
    <>
      <Container className="px-5">
        <Row>
          <h2 className="text-center"> My posts</h2>
          {postArr.map((postobj, i) => {
            return <MyPost {...postobj} key={i}  />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Posts;
