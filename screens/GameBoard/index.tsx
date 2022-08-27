import React, { useContext, useState } from "react";
import { StatusBar, Image, Text, View, TouchableOpacity } from "react-native";
import { GameEngine } from "react-native-game-engine";

import styles from "./styles";
import systems from "./systems";
import entities from "./entities";
import { DimensionsContext } from "../../contexts/DimensionsContext";

const backgroundImage = require("../../assets/background.png");

const GameBoard = () => {
  const { width } = useContext(DimensionsContext);

  const [running, setRunning] = useState(true);
  const [gameEngine, setGameEngine] = useState(null);
  const [score, setScore] = useState(0);

  const onEvent = (e: { type: string }) => {
    if (e.type === "game_over") {
      setRunning(false);
      gameEngine.stop();
    } else if (e.type === "score") {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        resizeMode="stretch"
        source={backgroundImage}
      />
      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        style={styles.gameContainer}
        systems={systems}
        entities={entities()}
        onEvent={onEvent}
        running={running}
      >
        <StatusBar hidden={true} />
      </GameEngine>
      <Text style={styles.scoreText}>Score: {score}</Text>
      {!running ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            left: width / 4,
            width: width / 2,
            backgroundColor: "white",
            marginVertical: 80,
            borderRadius: 30,
          }}
        >
          <Text style={styles.gameOverText}>GAME OVER</Text>
          <Text style={styles.scoreTextOnGameOver}>Score: {score}</Text>
          <TouchableOpacity
            style={styles.touchPadGameOver}
            onPress={() => {
              setScore(0);
              setRunning(true);
              gameEngine.swap(entities());
            }}
          >
            <Text style={styles.restartText}>RESTART</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default GameBoard;
