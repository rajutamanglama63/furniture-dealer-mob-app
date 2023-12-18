import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import theme, { Box } from "@/utils/theme";
import NavigateBack from "@/components/shared/navigate-back";
import { FlatList, ScrollView } from "react-native";
import Card from "@/components/shared/card";
import styles from "./cart.style";
import Button from "@/components/shared/button";

type cartItemsType = {
  id: number;
  itemName: string;
  store: string;
  pic: string;
  price: number;
  desc: string;
  count: number;
};

const CartScreen = () => {
  const CartItems = [
    {
      id: 8,
      itemName: "Flying Chair",
      store: "Harix Furinture",
      pic: "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: 443.65,
      desc: "loream ipsum gen",
      count: 1,
    },
    {
      id: 9,
      itemName: "Luxury Sofa",
      store: "John Furinture",
      pic: "https://images.unsplash.com/photo-1634497885778-152eb6fd543d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: 133.665,
      desc: "loream ipsum gen",
      count: 2,
    },
  ];

  const itemsToRender = ({ item }: { item: cartItemsType }) => {
    return (
      <Box key={item.id}>
        <Card item={item} />
      </Box>
    );
  };
  return (
    <SafeAreaWrapper>
      <Box
        mt="3"
        mb="12"
        position="relative"
        flex={1}
        // style={{
        //   backgroundColor: theme.colors.zinc550,
        // }}
      >
        <NavigateBack screenTitle="Cart" />

        <FlatList
          style={{
            marginBottom: theme.spacing[5],
            marginTop: theme.spacing[5],
          }}
          data={CartItems}
          renderItem={itemsToRender}
          contentContainerStyle={{ rowGap: theme.spacing[3] }}
        />
        <Box style={styles.calculation}>
          <Button
            label={`checkout $234`}
            uppercase
            bgcolor={theme.colors.green900}
          />
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default CartScreen;
