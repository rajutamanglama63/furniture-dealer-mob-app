import theme from "@/utils/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  calculation: {
    // borderColor: theme.colors.purple700,
    // borderWidth: theme.spacing[1],
    borderTopLeftRadius: theme.borderRadii["rounded-5xl"],
    borderTopRightRadius: theme.borderRadii["rounded-5xl"],
    flexDirection: "column",
    columnGap: theme.spacing[3],
    width: "100%",
    paddingHorizontal: theme.spacing[5],
    height: 200,
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.colors.slate100,
  },
});

export default styles;
