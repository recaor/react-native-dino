import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DimensionsProvider from "./contexts/DimensionsContext";
import Dashboard from "./screens/Dashboard";
import GameBoard from "./screens/GameBoard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DimensionsProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="GameBoard"
            component={GameBoard}
            options={{ orientation: "landscape" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DimensionsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
