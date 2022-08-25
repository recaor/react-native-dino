import React from "react";
import { Button, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

import styles from "./style";

const Dashboard = ({ navigation }) => {
  const toggleOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    navigation.navigate("GameBoard");
  };

  return (
    <View style={styles.background}>
      <Button
        title="Start Game"
        color="orange"
        style={styles.startButton}
        onPress={toggleOrientation}
      />
    </View>
  );
};

export default Dashboard;
