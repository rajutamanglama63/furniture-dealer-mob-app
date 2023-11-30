import theme from "@/utils/theme";
import { backgroundColor } from "@shopify/restyle";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    height: 400,
    width: "100%",
    position: "absolute",
  },
  img: {
    position: "absolute",
    width: "100%",
    height: 400,
    objectFit: "fill",
  },
  back: {
    position: "relative",
    top: 50,
  },
  interactionBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottom: {
    flex: 1,
    height: 400,
    width: "100%",
    position: "relative",
    marginTop: 390,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.borderRadii["rounded-3xl"],
    borderTopRightRadius: theme.borderRadii["rounded-3xl"],
  },
  detailPart: {
    flexDirection: "column",
    padding: theme.spacing[5.5],
    // borderWidth: 2,
    // borderColor: "green",
  },
  spaceDivider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "800",
  },
  price: {
    fontWeight: "800",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.blu100,
    borderRadius: theme.borderRadii["rounded-4xl"],
  },
  desc: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default styles;
