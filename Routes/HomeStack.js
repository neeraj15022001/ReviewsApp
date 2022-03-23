import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ReviewDetails from "../Screens/ReviewDetails";
import React from "react";
import Header from "../Shared/Header";

const Stack = createNativeStackNavigator();

export default function HomeStack({
  defaultNavigationOptions = {
    headerStyle: { backgroundColor: "white", height: 60 },
  },
}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title={"Gamezone"} />
            ),
            ...defaultNavigationOptions,
          };
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={defaultNavigationOptions}
      />
    </Stack.Navigator>
  );
}
