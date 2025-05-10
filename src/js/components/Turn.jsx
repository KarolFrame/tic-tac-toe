import React from "react";
import "../../styles/Turn.css";

const Turn = ({ onClickTurn, textTurn, hidden }) => {
  return (
    <>
      <li className={`${hidden ? "hidden" : ""}`}>
        <button className="turn" onClick={onClickTurn}>
          {textTurn}
        </button>
      </li>
    </>
  );
};

export default Turn;
