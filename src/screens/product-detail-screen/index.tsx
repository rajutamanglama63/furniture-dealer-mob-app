import { Image } from "react-native";
import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/theme";
import NavigateBack from "@/components/shared/navigate-back";
import styles from "./productDetail.style";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ProductStackParamList } from "@/navigations/types";

type ProductScreenRouteProp = RouteProp<ProductStackParamList, "ProductDetail">;

const ProductDetailScreen = () => {
  const route = useRoute<ProductScreenRouteProp>();

  const { id } = route.params;
  console.log("id: ", id);
  return (
    <SafeAreaWrapper>
      <NavigateBack screenTitle={"Product"} />
      {/* <Image source={{ uri: "" }} /> */}
      <Text>Product detail</Text>
    </SafeAreaWrapper>
  );
};

export default ProductDetailScreen;
