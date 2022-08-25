import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginBottom: 30,
  },
  startButton: {
    width: 150,
    borderColor: "red",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  welcomeAnimation: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  animationView: {
    width: 235,
    height: 159,
    marginBottom: 30,
  },
  animationImage: {
    width: "100%",
    height: "100%",
  },
  startText: {
    color: "white",
    fontSize: 20,
  },
});

export default styles;
