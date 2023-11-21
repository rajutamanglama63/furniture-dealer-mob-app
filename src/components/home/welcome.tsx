import { Box, Text } from "@/utils/theme";
import React from "react";
import theme from "@/utils/theme";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Input from "../shared/input";

const Welcome = () => {
  return (
    <Box>
      <Box style={styles.container}>
        <Text variant="text3Xl" color="gray9" style={styles.welcomeTxt}>
          Find The Most
        </Text>
        <Text variant="text3Xl" color="green900" style={styles.welcomeTxt}>
          Luxurious Furniture
        </Text>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mx="5.5"
        bg="blu100"
        my="5.5"
        borderRadius="rounded-4xl"
      >
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <Box flex={1}>
          <Input placeholder="what are you looking for" />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: {
    marginHorizontal: theme.spacing["5.5"],
    fontWeight: "900",
    marginTop: theme.spacing["3"],
  },
  searchIcon: {
    marginHorizontal: 10,
    color: theme.colors.gray4,
  },
});
