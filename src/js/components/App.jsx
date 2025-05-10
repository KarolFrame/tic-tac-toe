import React from "react";
import Title from "./Title";
import TurnsList from "./TurnsList";
import BoardGame from "./BoardGame";
import Turn from "./Turn";
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

  const [currentTurn, setCurrentTurn] = useState([]);

  const _newTurn = () => {
    setCurrentTurn((previusTurns) => {
      const newTurns = [...previusTurns, buttons];
      console.log(newTurns);
      return newTurns;
    });
  };

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

    const updatedButtons = buttons.map((btn, i) =>
      i === index ? { ...btn, content: state, getDisableButton: true } : btn
    );

    if (_checkWin(state, updatedButtons)) {
      setButtons(updatedButtons);
      setInGameText("Winner: ");
      setGameOver(true);
      return;
    }

    setButtons(updatedButtons);
    _newTurn();
    _changeState();
  };

  const onClickTurn = (turnButton) => {
    setButtons(currentTurn[turnButton]);
    setCurrentTurn(currentTurn.slice(0, turnButton));
  };

  return (
    <>
      <div className="container-fluid m-5">
        <div className="row">
          <div className="col-12 col-md-4 d-flex flex-column">
            <Title inGameText={inGameText} state={state} />
            <BoardGame buttons={buttons} clickButton={clickButton} />
          </div>
          <div className="col-12 col-md-4 mt-5">
            <TurnsList currentTurn={currentTurn} onClickTurn={onClickTurn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
