import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import theme, { Box, Text } from "@/utils/theme";
import { Ionicons } from "@expo/vector-icons";

type cartItemsType = {
  id: number;
  itemName: string;
  store: string;
  pic: string;
  price: number;
  desc: string;
  count: number;
};

const Card = ({ item }: { item: cartItemsType }) => {
  return (
    <Box style={styles.container}>
      <Box style={styles.picHolder}>
        {item.pic ? (
          <Image source={{ uri: item.pic }} style={styles.pic} />
        ) : (
          <Image
            source={{
              uri: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={styles.pic}
          />
        )}
      </Box>
      <Box style={styles.rightPart}>
        <Box style={styles.about}>
          <Text variant="textSm" fontWeight="500" color="green900">
            {item.itemName ? item.itemName : "Cupboard"}
          </Text>
          <Text variant="textXs" color="gray9">
            {item.store ? item.store : "Dream Furniture"}
          </Text>
          <Text variant="textXs" color="gray9">
            {item.price && item.count
              ? `${item.price} * ${item.count}`
              : "$123.23 * 12"}
          </Text>
        </Box>

        <Box style={styles.action}>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={20} color="red" />
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.slate100,
    borderRadius: theme.borderRadii["rounded-4xl"],
    padding: theme.spacing[2],
    marginHorizontal: theme.spacing[5],
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: theme.colors.amber700,
  },
  picHolder: {
    width: 60,
    height: 60,
  },
  pic: {
    width: "100%",
    height: 60,
    objectFit: "fill",
    borderRadius: theme.borderRadii["rounded-3xl"],
  },
  about: {
    flexDirection: "column",
    marginLeft: theme.spacing[2],
  },
  rightPart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  action: {
    // alignSelf: "center",
  },
});
