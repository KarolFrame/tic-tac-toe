import React from "react";
import Turn from "./Turn";

const TurnsList = ({ currentTurn, onClickTurn }) => {
  return (
    <>
      <ol className="turnList gap-3">
        <li>
          <button
            className="turn"
            disabled={currentTurn.length === 0}
            onClick={() => onClickTurn(0)}
          >
            Ir al inicio del juego
          </button>
        </li>
        {Array.from({ length: 8 }).map((_, index) => (
          <Turn
            key={index + 1}
            textTurn={`Ir al movimiento #${index + 1}`}
            hidden={index >= currentTurn.length}
            onClickTurn={() => onClickTurn(index + 1)}
          />
        ))}
      </ol>
    </>
  );
};

export default TurnsList;
