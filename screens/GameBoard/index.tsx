import React, { useContext, useState } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";

import styles from "./styles";
import { DimensionsContext } from "../../contexts/DimensionsContext";

const GameBoard = () => {
  const { width, height } = useContext(DimensionsContext);

  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);

  const onEvent = (e: { type: string }) => {
    if (e.type === "gameOver") {
      setRunning(false);
    } else if (e.type === "score") {
      setScore((prev) => prev + 1);
    }
  };

  const restart = () => {
    setRunning(true);
    setScore(0);
  };

  return (
    <View style={styles.container}>
      <GameEngine
        style={styles.gameContainer}
        onEvent={onEvent}
        running={running}
      >
        <StatusBar hidden={true} />
      </GameEngine>
      {running ? <Text>{score}</Text> : <Text>Game Over</Text>}
    </View>
  );
};

export default GameBoard;
