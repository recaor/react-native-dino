import { Button, View } from "react-native";
import styles from "./style";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <Button
        title="Start Game"
        color="orange"
        style={styles.startButton}
        onPress={() => navigation.navigate("GameBoard")}
      />
    </View>
  );
};

export default Dashboard;
