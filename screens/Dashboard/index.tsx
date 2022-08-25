import React, { useContext } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

import styles from "./style";
import { DimensionsContext } from "../../contexts/DimensionsContext";
import { JumpingAnimation } from "../../assets/animations/JumpingAnimation";

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
        <Text style={styles.title}>Dino Game</Text>
        <View style={styles.animationView}>
          <Image
            source={JumpingAnimation}
            resizeMode="contain"
            style={styles.animationImage}
          />
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={toggleOrientation}
        >
          <Text style={styles.startText}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
