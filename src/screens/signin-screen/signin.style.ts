import theme from "@/utils/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: 300,
    position: "relative",
  },
  topImg: {
    width: "100%",
    height: 300,
    objectFit: "fill",
  },
  backBtn: {
    position: "absolute",
    top: 50,
  },
  bottom: {
    paddingHorizontal: theme.spacing[3.5],
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadii["rounded-4xl"],
    backgroundColor: theme.colors.blu100,
    marginHorizontal: 6,
    color: theme.colors.gray4,
  },
});

export default styles;
