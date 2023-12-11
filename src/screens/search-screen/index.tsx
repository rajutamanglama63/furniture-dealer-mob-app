import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import theme, { Box } from "@/utils/theme";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Input from "@/components/shared/input";
import Card from "@/components/shared/card";

const SearchScreen = () => {
  return (
    <SafeAreaWrapper>
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
      <Card />
    </SafeAreaWrapper>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchIcon: {
    marginHorizontal: 10,
    color: theme.colors.gray4,
  },
});
