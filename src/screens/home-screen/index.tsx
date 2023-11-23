import React from "react";
import theme, { Box, Text } from "@/utils/theme";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import styles from "./home.style";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import Carousel from "@/components/home/carousel";
import HomeScreenHeader from "@/components/home/home-screen-header";
import Slider from "@/components/home/slider";
import { useNavigation } from "@react-navigation/native";
import { ProductsNavigationType } from "@/navigations/types";

const HomeScreen = () => {
  const navigation = useNavigation<ProductsNavigationType>();
  const products = [
    {
      id: 1,
      name: "One pice sofa",
      pic: "https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww",
      price: "$ 123.45",
      desc: "loream ipsum gen",
    },
    {
      id: 2,
      name: "Sofa set",
      pic: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww",
      price: "$ 153.45",
      desc: "loream ipsum gen",
    },
    {
      id: 3,
      name: "Family sofa",
      pic: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 125.43",
      desc: "loream ipsum gen",
    },
    {
      id: 4,
      name: "Meeting Table",
      pic: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 298.45",
      desc: "loream ipsum gen",
    },
    {
      id: 5,
      name: "Dining Table",
      pic: "https://plus.unsplash.com/premium_photo-1676823570926-238f23020786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 153.75",
      desc: "loream ipsum gen",
    },
  ];

  const itemsToRender = ({ item }: any) => {
    return (
      <Box key={item.id}>
        <Slider item={item} />
      </Box>
    );
  };

  const navigateToProducts = () => {
    navigation.navigate("Products");
  };
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
        <HomeScreenHeader />
        <Carousel />
        <Box
          mx="5.5"
          my="4"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text variant="textLg" color="gray9" fontWeight="bold">
            New Rivals
          </Text>
          <TouchableOpacity onPressIn={navigateToProducts}>
            <Ionicons name="ios-grid" size={24} color={theme.colors.green900} />
          </TouchableOpacity>
        </Box>
        <Box mx="5.5">
          <FlatList
            data={products}
            renderItem={itemsToRender}
            horizontal
            contentContainerStyle={{ columnGap: theme.spacing["3"] }}
          />
        </Box>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
