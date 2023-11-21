import ProductDetailScreen from "@/screens/product-detail-screen";
import SearchScreen from "@/screens/search-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SearchStackParamList } from "./types";

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
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

export default SearchStackNavigator;
