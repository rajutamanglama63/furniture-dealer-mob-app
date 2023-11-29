import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import theme, { Box, Text } from "@/utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  HomeStackParamList,
  ProductStackParamList,
  ProductsNavigationType,
} from "@/navigations/types";

type itemType = {
  item: { id: number; name: string; pic: string; price: string; desc: string };
};

const Slider = ({ item }: itemType) => {
  // const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation<any>();

  const navigateToProductDetail = () => {
    navigation.navigate("ProductView", { id: item.id });
  };
  return (
    // <Box marginLeft="5.5">
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Pressable style={styles.rivalItem} onPress={navigateToProductDetail}>
        <Box alignItems="center">
          <Image
            source={{
              uri: item.pic,
            }}
            style={{
              height: 100,
              // width: screenWidth - 250,
              width: "100%",
              borderRadius: theme.borderRadii["rounded-3xl"],
              // marginTop: theme.spacing[1],
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
            <Ionicons
              name="add-circle"
              size={30}
              color={theme.colors.green900}
            />
          </TouchableOpacity>
        </Box>
      </Pressable>
    </ScrollView>
    // </Box>
  );
};

export default Slider;

const styles = StyleSheet.create({
  rivalItem: {
    height: 180,
    width: 150,
    backgroundColor: theme.colors.blu100,
    padding: theme.spacing[2],
    flexDirection: "column",
    borderRadius: theme.borderRadii["rounded-3xl"],
    // borderColor: "green900",
  },
});
