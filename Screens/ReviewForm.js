import React from "react";
import { TextInput, View, Text } from "react-native";
import { global } from "../Styles/Global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../Shared/Button";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ submitHandler }) {
  return (
    <View style={global.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          submitHandler(values);
        }}
      >
        {(props) => {
          return (
            <View>
              <TextInput
                style={global.input}
                placeholder="Review Title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
                onBlur={props.handleBlur("title")}
              />
              <Text style={global.errorText}>
                {props.touched.title && props.errors.title}
              </Text>
              <TextInput
                style={global.input}
                placeholder="Review Body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur("body")}
              />
              <Text style={global.errorText}>
                {props.touched.body && props.errors.body}
              </Text>
              <TextInput
                style={global.input}
                placeholder="Rating (1-5)"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                onBlur={props.handleBlur("rating")}
                keyboardType="numeric"
              />
              <Text style={global.errorText}>
                {props.touched.rating && props.errors.rating}
              </Text>
              <FlatButton text="submit" onPress={props.handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
