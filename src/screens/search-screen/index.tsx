import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import theme, { Box } from "@/utils/theme";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Input from "@/components/shared/input";
import Card from "@/components/shared/card";

type cardDataType = {
  id: number;
  itemName: string;
  store: string;
  pic: string;
  price: number;
  desc: string;
  count: number;
};

const SearchScreen = () => {
  const foundItems = [
    {
      id: 8,
      itemName: "One pice sofa",
      store: "Harix Furinture",
      pic: "https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww",
      price: 443.65,
      desc: "loream ipsum gen",
      count: 3,
    },
    {
      id: 9,
      itemName: "Luxury Sofa",
      store: "John Furinture",
      pic: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 133.665,
      desc: "loream ipsum gen",
      count: 2,
    },
  ];

  const itemsToRender = ({ item }: { item: cardDataType }) => {
    return (
      <Box key={item.id}>
        <Card item={item} />
      </Box>
    );
  };
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

      <FlatList
        data={foundItems}
        renderItem={itemsToRender}
        contentContainerStyle={{ rowGap: theme.spacing[3] }}
      />
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
