import React, { useContext, useState } from "react";
import { StatusBar, Image, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";

import styles from "./styles";
import systems from "./systems";
import entities from "./entities";
import { DimensionsContext } from "../../contexts/DimensionsContext";

const backgroundImage = require("../../assets/background.png");

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
      <Image
        style={styles.backgroundImage}
        resizeMode="stretch"
        source={backgroundImage}
      />
      <GameEngine
        style={styles.gameContainer}
        systems={systems}
        entities={entities()}
        onEvent={onEvent}
        running={running}
      >
        <StatusBar hidden={true} />
      </GameEngine>
      <Text style={styles.scoreText}>{score}</Text>
    </View>
  );
};

export default GameBoard;
