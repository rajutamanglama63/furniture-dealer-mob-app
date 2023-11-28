import { ProductsNavigationType } from "@/navigations/types";
import theme, { Box, Text } from "@/utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type itemType = {
  item: { id: number; name: string; pic: string; price: string; desc: string };
};

const ProductsGrid = ({ item }: itemType) => {
  // const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation<ProductsNavigationType>();

  const navigateToProductDetail = () => {
    navigation.navigate("ProductDetail", { id: item.id });
  };
  return (
    <Pressable style={styles.rivalItem} onPress={navigateToProductDetail}>
      <Box alignItems="center">
        <Image
          source={{
            uri: item.pic,
          }}
          style={{
            height: 100,
            width: "100%",
            borderRadius: theme.borderRadii["rounded-3xl"],
          }}
        />
      </Box>
      <Text
        my="1.5"
        variant="textSm"
        color="gray9"
        fontWeight="bold"
        style={{ justifyContent: "flex-start" }}
      >
        {item.name}
      </Text>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexDirection="column">
          <Text variant="textXXs" color="gray4">
            {item.desc}
          </Text>
          <Text variant="textXs" fontWeight="bold" color="gray9">
            {item.price}
          </Text>
        </Box>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={30} color={theme.colors.green900} />
        </TouchableOpacity>
      </Box>
    </Pressable>
  );
};

export default ProductsGrid;

const styles = StyleSheet.create({
  rivalItem: {
    height: 180,
    width: 150,
    backgroundColor: theme.colors.blu100,
    padding: theme.spacing[2],
    flexDirection: "column",
    borderRadius: theme.borderRadii["rounded-3xl"],
    marginHorizontal: theme.spacing[4],
    marginBottom: theme.spacing[3],
  },
});
