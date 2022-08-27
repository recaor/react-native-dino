import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
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
    fontSize: 30,
    color: "red",
  },
  gameOverText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    marginBottom: 20,
  },
  scoreTextOnGameOver: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    marginBottom: 15,
  },
  touchPadGameOver: {
    backgroundColor: "green",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  restartText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});

export default styles;
