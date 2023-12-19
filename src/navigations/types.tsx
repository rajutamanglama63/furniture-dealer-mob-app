import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
  ProductStack: NativeStackNavigationProp<ProductStackParamList>;
  ProductView: {
    id?: number;
  };
};

export type SearchStackParamList = {
  Search: undefined;
  ProductDetail: {
    id?: number;
  };
};

export type ProfileStackParamList = {
  Profile: undefined;
  Order: undefined;
  Favourite: undefined;
};

export type ProductStackParamList = {
  Products: undefined;
  ProductDetail: {
    id?: number;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type ProductsNavigationType =
  NativeStackNavigationProp<ProductStackParamList>;
