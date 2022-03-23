import React from "react";
import { View, Text } from "react-native";
import { global } from "../Styles/Global";

export default function About() {
  return (
    <View style={global.container}>
      <Text style={global.titleText}>About Screen</Text>
    </View>
  );
}
