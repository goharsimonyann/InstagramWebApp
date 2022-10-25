import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
          <span className="more-less">...more</span>
        ) : (
          <span className="more-less">...less</span>
        )}
      </span>
    </p>
  );
};

export default ReadMore;
