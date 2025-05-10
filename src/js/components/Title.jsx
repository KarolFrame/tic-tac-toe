import React from "react";

const Title = ({ state, inGameText }) => {
  return (
    <>
      <span>
        <span></span>
        {inGameText}
        <span>{state}</span>
      </span>
    </>
  );
};

export default Title;
