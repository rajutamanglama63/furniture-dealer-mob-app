import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { RootBottomTabParamList } from "./types";
import HomeStackNavigator from "./home-stack-navigator";
import { Ionicons } from "@expo/vector-icons";
import SearchStackNavigator from "./search-stack-navigator";
import ProfileStackNavigator from "./profile-stack-navigator";

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? theme.colors.gray8 : theme.colors.gray550}
              />
            );
          },
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={() => ({
          title: "Search",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search-sharp"}
                size={24}
                color={focused ? theme.colors.gray8 : theme.colors.gray550}
              />
            );
          },
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={() => ({
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? theme.colors.gray8 : theme.colors.gray550}
              />
            );
          },
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
