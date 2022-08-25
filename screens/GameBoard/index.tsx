import React, { useContext, useState } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";

import styles from "./styles";
import { DimensionsContext } from "../../contexts/DimensionsContext";
import Entities from "./entities";
import GameOver from "./components/GameOver";
import systems from "./systems";

const backgroundImage = require("./assets/nature.jpg");

const GameBoard = () => {
  const { width, height } = useContext(DimensionsContext);
  console.log("width: ", width);
  console.log("height: ", height);

  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);

  let gameEngine = null;

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
    gameEngine.swap(Entities());
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: width,
          height: height,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        source={backgroundImage}
      />
      <GameEngine
        ref={(ref) => {
          gameEngine = ref;
        }}
        style={styles.gameContainer}
        systems={systems}
        onEvent={onEvent}
        entities={Entities()}
        running={running}
      >
        <StatusBar hidden={true} />
      </GameEngine>
      {running ? (
        <Text style={styles.score}>{score}</Text>
      ) : (
        <GameOver score={score} restart={restart} />
      )}
    </View>
  );
};

export default GameBoard;
