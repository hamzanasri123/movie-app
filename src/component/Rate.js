import React from "react";
import "./style.css";
function Rate({ rate }) {
  const Rate = (x) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (i < x) {
        arr.push(<span> ★</span>);
      } else {
        arr.push(<span>☆</span>);
      }
    }
    return arr;
  };

  return <div>{Rate(rate)}</div>;
}

export default Rate;
