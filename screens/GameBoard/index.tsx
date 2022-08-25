import { useContext } from "react";
import { StatusBar } from "react-native";
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";

import styles from "./styles";
import { DimensionsContext } from "../../contexts/DimensionsContext";

const GameBoard = () => {
  const { width, height } = useContext(DimensionsContext);

  return (
    <GameEngine style={styles.container}>
      <StatusBar hidden={true} />
    </GameEngine>
  );
};

export default GameBoard;
