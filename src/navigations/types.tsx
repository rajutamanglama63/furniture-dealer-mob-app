import { NavigatorScreenParams } from "@react-navigation/native";

export type AppStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList>;
};

export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type RootStackParamList = {
  AppStack: NavigatorScreenParams<AppStackParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

export type RootBottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  SearchStack: NavigatorScreenParams<SearchStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  Cart: undefined;
  AllProducts: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
  ProductDetail: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  Order: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
