import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../Screens/About";
import React from "react";
import Header from "../Shared/Header";

const Stack = createNativeStackNavigator();

export default function AboutStack({
  defaultNavigationOptions = {
    headerStyle: { backgroundColor: "white", height: 60 },
  },
}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title={"About"} />
            ),
            ...defaultNavigationOptions,
          };
        }}
      />
    </Stack.Navigator>
  );
}
