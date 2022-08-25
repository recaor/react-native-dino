import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  startButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  welcomeAnimation: {
    flexDirection: "column",
    width: 300,
    height: 200,
  },
});

export default styles;
