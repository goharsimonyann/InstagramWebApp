import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchList from "../components/SearchList";
import Header from "../components/header/Header";
const SearchResults = (props) => {
  return (
    <Container fluid>
      <Header />
      <Row>
        {props.data.map((obj) => (
          <SearchList {...obj} />
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
