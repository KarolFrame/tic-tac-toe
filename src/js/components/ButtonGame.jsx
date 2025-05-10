import React from "react";
import "../../styles/ButtonGame.css";

const ButtonGame = ({ index, button, clickButton }) => {
  const buttonData = button[index];
  return (
    <>
      <button
        disabled={buttonData.getDisableButton}
        onClick={() => clickButton(index)}
      >
        {buttonData.content}
      </button>
    </>
  );
};

export default ButtonGame;
