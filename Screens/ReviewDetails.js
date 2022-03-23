import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { global } from "../Styles/Global";
import Card from "../Shared/Card";
import { images } from "../Styles/Global";

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params;
  return (
    <View style={global.container}>
      <Card>
        <Text style={global.titleText}>{JSON.stringify(title)}</Text>
        <Text style={global.titleText}>{JSON.stringify(body)}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
