import { View, Text, FlatList } from "react-native";
import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import NavigateBack from "@/components/shared/navigate-back";
import theme, { Box } from "@/utils/theme";
import Card from "@/components/shared/card";

type orderItemsType = {
  id: number;
  itemName: string;
  store: string;
  pic: string;
  price: number;
  desc: string;
  count: number;
};

const OrderScreen = () => {
  const OrderItems = [
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

  const itemsToRender = ({ item }: { item: orderItemsType }) => {
    return (
      <Box key={item.id}>
        <Card item={item} />
      </Box>
    );
  };
  return (
    <SafeAreaWrapper>
      <Box mt="3">
        <NavigateBack screenTitle="Orders" />
        <FlatList
          style={{
            marginBottom: theme.spacing[5],
            marginTop: theme.spacing[5],
          }}
          data={OrderItems}
          renderItem={itemsToRender}
          contentContainerStyle={{ rowGap: theme.spacing[3] }}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default OrderScreen;
