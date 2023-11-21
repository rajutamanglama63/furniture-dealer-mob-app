import theme from "@/utils/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appWrapper: {
    marginHorizontal: theme.spacing["5.5"],
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontWeight: "500",
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    backgroundColor: theme.colors.green400,
    borderRadius: theme.borderRadii["rounded-xl"],
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNum: {
    color: theme.colors.white,
  },
});

export default styles;
