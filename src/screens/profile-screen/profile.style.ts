import theme from "@/utils/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    height: 300,
    width: "100%",
    position: "relative",
  },
  img: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  dp: {
    position: "absolute",
    height: 120,
    width: 120,
    // borderRadius: theme.borderRadii["rounded-10xl"],
    // borderWidth: 1,
    borderColor: theme.colors.violet400,
    alignSelf: "center",
    top: 240,
  },
  dpImg: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    borderRadius: theme.borderRadii["rounded-11xl"],
  },
  email: {
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing[2],
    borderWidth: 1,
    borderColor: theme.colors.gray550,
    borderRadius: theme.borderRadii["rounded-7xl"],
    backgroundColor: theme.colors.blu100,
    alignSelf: "center",
    marginBottom: theme.spacing[5],
  },
});

export default styles;
