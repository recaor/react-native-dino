import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  scoreText: {
    position: "absolute",
    top: 15,
    right: 30,
    fontSize: 20,
  },
});

export default styles;
