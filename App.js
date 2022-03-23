import React from "react";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import Drawer from "./Routes/Drawer";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  if (fontsLoaded) {
    return <Drawer />;
  } else {
    return <AppLoading />;
  }
}
