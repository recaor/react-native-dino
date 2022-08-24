import { StyleSheet } from "react-native";
import { width, height } from "../../helpers/dimentions";

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
  },
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
});

export default styles;
