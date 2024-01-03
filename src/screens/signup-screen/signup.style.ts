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
});

export default styles;
