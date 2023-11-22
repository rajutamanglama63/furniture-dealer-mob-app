import React from "react";
import { Box, Text } from "@/utils/theme";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import styles from "./home.style";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native";
import Welcome from "@/components/home/welcome";
import Carousel from "@/components/home/carousel";

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box mt="3" style={styles.appWrapper}>
        <Box style={styles.appBar}>
          <Ionicons name="location-outline" size={30} />
          <Text variant="textXl" color="gray650" style={styles.location}>
            Kathmandu, Nepal
          </Text>
          <Box style={{ alignItems: "flex-end" }}>
            <Box style={styles.cartCount}>
              <Text style={styles.cartNum} variant="textXs">
                4
              </Text>
            </Box>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
      <ScrollView>
        <Welcome />
        <Carousel />
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
