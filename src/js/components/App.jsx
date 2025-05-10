import React from "react";
import Title from "./Title";
import TurnsList from "./TurnsList";
import BoardGame from "./BoardGame";
import { useState } from "react";

const App = () => {
  const [gameOver, setGameOver] = useState(false);
  const [buttons, setButtons] = useState([
    { content: "", getDisableButton: false },
    { content: "", getDisableButton: false },
    { content: "", getDisableButton: false },
    { content: "", getDisableButton: false },
    { content: "", getDisableButton: false },
    { content: "", getDisableButton: false },
    { content: "", getDisableButton: false },
    { content: "", getDisableButton: false },
    { content: "", getDisableButton: false },
  ]);
  const [state, setState] = useState("X");
  const [inGameText, setInGameText] = useState("Next player: ");

  const _checkWin = (currentPlayer, buttons) => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const contentButtons = buttons.map((button) => button.content);
    console.log(contentButtons);

    for (let i = 0; i < winCombos.length; i++) {
      const [a, b, c] = winCombos[i];
      if (
        contentButtons[a] === currentPlayer &&
        contentButtons[b] === currentPlayer &&
        contentButtons[c] === currentPlayer
      ) {
        return true;
      }
    }
    return false;
  };

  const _changeState = () => {
    if (state == "X") {
      setState("O");
      return;
    }
    setState("X");
  };

  const clickButton = (index) => {
    if (gameOver) return;

    setButtons((box) => {
      const updatedButtons = box.map((btn, i) =>
        i === index ? { ...btn, content: state, getDisableButton: true } : btn
      );

      if (_checkWin(state, updatedButtons)) {
        setInGameText("Winner: ");
        setGameOver(true);
        return updatedButtons;
      }

      _changeState();
      return updatedButtons;
    });
  };

  return (
    <>
      <div className="container-fluid m-5">
        <div className="row">
          <div className="col d-flex flex-column">
            <Title inGameText={inGameText} state={state} />
            <BoardGame buttons={buttons} clickButton={clickButton} />
          </div>
          <div className="col">
            <TurnsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
