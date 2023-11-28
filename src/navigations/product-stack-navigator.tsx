import ProductsScreen from "@/screens/all-products-screen";
import ProductDetailScreen from "@/screens/product-detail-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ProductStackParamList } from "./types";

const Stack = createNativeStackNavigator<ProductStackParamList>();

const ProductStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProductStackNavigator;
