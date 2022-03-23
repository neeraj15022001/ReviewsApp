import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="AboutStack" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
