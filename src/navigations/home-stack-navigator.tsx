import CartScreen from "@/screens/cart-screen";
import HomeScreen from "@/screens/home-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProductStackNavigator from "./product-stack-navigator";
import { HomeStackParamList } from "./types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductStack"
        component={ProductStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
