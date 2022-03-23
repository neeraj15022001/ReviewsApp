import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function FlatButton({ text, pressHandler }) {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
