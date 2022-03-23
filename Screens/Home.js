import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { global } from "../Styles/Global";
import Card from "../Shared/Card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const addReview = (review) => {
    setReviews((prevState) => {
      review.key = Math.random().toString();
      return [review, ...prevState];
    });
    setModalOpen(false);
  };
  const pressHandler = (item) => {
    navigation.navigate("ReviewDetails", item);
  };
  return (
    <View style={global.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm submitHandler={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Card>
              <Text style={global.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  modalContent: { flex: 1 },
  modalToggle: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
