import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { addFollow } from "../actions/follow";
const SearchList = (props) => {
  const [follow, setFollow] = useState(true);
  //add follow

  const func = async (id, e) => {
    e.preventDefault();
    const res = await addFollow(id);
    if (res.data) {
      console.log(res.data);
    }

    setFollow(!follow);
  };

  // useEffect(() => {}, []);

  return (
    <Card className="post-card p-1">
      <div className="d-flex justify-content-between align-items-center p-2">
        <Image
          style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          src="https://via.placeholder.com/300"
        />
        <Card.Text>{props.userName}</Card.Text>
        <Button
          variant={follow ? "primary" : "secondary"}
          size="sm"
          style={{ padding: "4px 15px" }}
          onClick={(e) => func(props.id, e)}
        >
          {follow ? "Follow" : "Unfollow"}
        </Button>
      </div>
    </Card>
  );
};

export default SearchList;
