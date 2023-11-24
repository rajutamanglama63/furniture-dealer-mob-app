import { View, Text, Image } from "react-native";
import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box } from "@/utils/theme";
import NavigateBack from "@/components/shared/navigate-back";
import styles from "./productDetail.style";

const ProductDetailScreen = () => {
  return (
    <SafeAreaWrapper>
      {/* <Image source={{ uri: "" }} /> */}
      <Box>Product detail</Box>
    </SafeAreaWrapper>
  );
};

export default ProductDetailScreen;
