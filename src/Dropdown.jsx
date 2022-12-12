import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [val, setVal] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [ListArr, setListArr] = useState(["yes", "Probably Not"]);

  const onClickHandeler = (e) => {
    setVal(e.target.textContent);
    setIsHover(false);
  };

  const mouseHoverHandler = () => {
    setIsHover(true);
  };

  const Array = ListArr.map((res, ind) => {
    return (
      <Link className="link-array" href="#" onClick={onClickHandeler} key={ind}>
        {res}
      </Link>
    );
  });
  return (
    <div className="dropdown">
      <h1>Should you use Dropdown?</h1>
      <h1 className="val-text">{val}</h1>
      <button onMouseEnter={mouseHoverHandler} className="dropbtn">
        Select
      </button>
      {isHover ? <div className="dropdown-content">{Array}</div> : ""}
    </div>
  );
};

export default Dropdown;
