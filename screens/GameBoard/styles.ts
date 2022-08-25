import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  score: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    top: 100,
  },
  gameOverContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
