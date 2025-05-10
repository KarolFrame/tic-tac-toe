import React from "react";
import ButtonGame from "./ButtonGame";

const BoardGame = ({ buttons, clickButton }) => {
  return (
    <>
      <div className="container-fluid d-flex">
        <div className="row">
          <div className="co-12 d-flex">
            <ButtonGame index={0} button={buttons} clickButton={clickButton} />
            <ButtonGame index={1} button={buttons} clickButton={clickButton} />
            <ButtonGame index={2} button={buttons} clickButton={clickButton} />
          </div>
          <div className="col-12 d-flex">
            <ButtonGame index={3} button={buttons} clickButton={clickButton} />
            <ButtonGame index={4} button={buttons} clickButton={clickButton} />
            <ButtonGame index={5} button={buttons} clickButton={clickButton} />
          </div>
          <div className="col-12 d-flex">
            <ButtonGame index={6} button={buttons} clickButton={clickButton} />
            <ButtonGame index={7} button={buttons} clickButton={clickButton} />
            <ButtonGame index={8} button={buttons} clickButton={clickButton} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardGame;
