import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

import styles from "./style";
import { DimensionsContext } from "../../contexts/DimensionsContext";
import ImageSequences from "../../components/ImageSequences";
import { WelcomeAnimation } from "../../assets/animations/WelcomeAnimation";

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
      <View style={styles.welcomeAnimation}>
        <View style={{ width: 335, height: 259 }}>
          <ImageSequences images={WelcomeAnimation} speed={500} />
        </View>
        <Button
          title="Start Game"
          color="orange"
          style={styles.startButton}
          onPress={toggleOrientation}
        />
      </View>
    </View>
  );
};

export default Dashboard;
