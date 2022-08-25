import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

import styles from "./style";
import { DimensionsContext } from "../../contexts/DimensionsContext";

const Dashboard = ({ navigation }) => {
  const { width, height } = useContext(DimensionsContext);

  const toggleOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    navigation.navigate("GameBoard");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height: height,
      }}
    >
      <Button
        title="Start Game"
        color="orange"
        style={styles.startButton}
        onPress={toggleOrientation}
      />
      <Text>
        {width} : {height}
      </Text>
    </View>
  );
};

export default Dashboard;
