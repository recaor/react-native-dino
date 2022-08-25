import { useContext } from "react";
import { Text } from "react-native";
import { DimensionsContext } from "../../contexts/DimensionsContext";

const GameBoard = () => {
  const { width, height } = useContext(DimensionsContext);

  return (
    <Text>
      {width} : {height}
    </Text>
  );
};

export default GameBoard;
