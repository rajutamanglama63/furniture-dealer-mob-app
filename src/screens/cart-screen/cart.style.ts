import theme from "@/utils/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  calculation: {
    borderColor: theme.colors.fuchsia100,
    borderWidth: theme.spacing[1],
    width: "100%",
    paddingHorizontal: theme.spacing[5],
    height: 200,
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
