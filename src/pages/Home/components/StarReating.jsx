import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function StarReating({ star }) {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        if (index + 1 <= star) {
          return <AiFillStar className="star"/>;
        } else {
          return <AiOutlineStar className="star" />;
        }
      })}
    </div>
  );
}

export default StarReating;
