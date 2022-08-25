import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { heightRatio, widthRatio } from "../../utils/styleSheet";
import styleGuide from "../../utils/styleGuide";

function GameOver(props: { restart: any; score: any }) {
  const { restart, score } = props;

  return (
    <View style={styles.gameOverContainer}>
      <Text style={styles.gameOverText}>Game Over</Text>
      <Text style={styles.gameOverText}>{score}</Text>
      <TouchableOpacity onPress={restart}>
        <View style={[styles.container, styles.shadow]}>
          <Text style={[styles.textStyle]}>Resart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    alignItems: "center",
  },
  gameOverText: {
    fontSize: heightRatio * 30,
    fontWeight: "bold",
    color: "grey",
    marginBottom: heightRatio * 20,
  },
  container: {
    height: heightRatio * 30,
    width: widthRatio * 100,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "transparent",
    backgroundColor: styleGuide.primaryColor,
  },
  shadow: {
    ...styleGuide.bigShadow,
  },
  textStyle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});
