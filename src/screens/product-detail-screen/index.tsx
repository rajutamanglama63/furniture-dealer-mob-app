import Button from "@/components/shared/button";
import NavigateBack from "@/components/shared/navigate-back";
import { ProductStackParamList } from "@/navigations/types";
import { getColors } from "@/utils/helpers";
import theme, { Box, Text } from "@/utils/theme";
import { Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, ScrollView, TouchableOpacity } from "react-native";
import styles from "./productDetail.style";

type ProductScreenRouteProp = RouteProp<ProductStackParamList, "ProductDetail">;

const ProductDetailScreen = () => {
  const route = useRoute<ProductScreenRouteProp>();

  const { id } = route.params;
  // console.log("id: ", id);

  const COLORS = getColors();
  return (
    <>
      <Box style={styles.top}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&w=1600",
          }}
          style={styles.img}
        />
        <Box style={styles.back}>
          <Box style={styles.interactionBar}>
            <NavigateBack />
            <Pressable style={{ marginRight: theme.spacing["5.5"] }}>
              <Ionicons name="heart-outline" size={34} color="black" />
            </Pressable>
          </Box>
        </Box>
      </Box>
      <Box style={styles.bottom}>
        <ScrollView>
          <Box style={styles.detailPart}>
            {/* title & price row */}
            <Box style={styles.spaceDivider}>
              <Text variant="textLg" style={styles.title}>
                Leather Seat
              </Text>
              <Text variant="textSm" style={styles.price}>
                $ 230.44
              </Text>
            </Box>

            {/* rating & number counter */}
            <Box my="4" style={styles.spaceDivider}>
              <Box style={styles.spaceDivider}>
                <Ionicons
                  name="md-star"
                  size={20}
                  color={theme.colors.amber400}
                />
                <Ionicons
                  name="md-star"
                  size={20}
                  color={theme.colors.amber400}
                />
                <Ionicons
                  name="md-star"
                  size={20}
                  color={theme.colors.amber400}
                />
                <Ionicons
                  name="md-star"
                  size={20}
                  color={theme.colors.amber400}
                />
                <Ionicons
                  name="md-star"
                  size={20}
                  color={theme.colors.amber400}
                />
                <Text ml="2">(4.9)</Text>
              </Box>
              <Box width={65} style={styles.spaceDivider}>
                <Feather
                  name="plus-circle"
                  size={20}
                  color={theme.colors.gray550}
                />
                <Text>1</Text>
                <Feather
                  name="minus-circle"
                  size={20}
                  color={theme.colors.gray550}
                />
              </Box>
            </Box>

            {/* disc part */}
            <Box style={styles.desc}>
              <Text variant="textBase" fontWeight="500" color="neutral900">
                Description
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                molestiae id cum suscipit harum eligendi laboriosam doloremque
                enim repellat ex omnis recusandae officia in, consectetur at sed
                ullam soluta magni. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eius molestiae id cum suscipit harum eligendi
                laboriosam doloremque enim repellat ex omnis recusandae officia
                in, consectetur at sed ullam soluta magni.
              </Text>
            </Box>

            {/* service */}
            <Box
              my="4"
              py="1"
              px="2"
              bg="blu100"
              borderRadius="rounded-4xl"
              style={styles.spaceDivider}
            >
              <Box flexDirection="row">
                <Ionicons
                  name="location-outline"
                  size={20}
                  style={{ paddingRight: 4 }}
                />
                <Text variant="textSm" fontWeight="400">
                  Kathmandu
                </Text>
              </Box>
              <Box flexDirection="row">
                <Feather name="truck" size={20} style={{ paddingRight: 4 }} />
                <Text variant="textSm" fontWeight="400">
                  Free Delivery
                </Text>
              </Box>
            </Box>

            {/* color */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Box flexDirection="row">
                {COLORS.map((_color) => {
                  return (
                    <Pressable key={_color.id} style={{ marginRight: 10 }}>
                      <Box
                        style={{ backgroundColor: _color.code }}
                        width={20}
                        height={20}
                        borderRadius="rounded-4xl"
                      ></Box>
                    </Pressable>
                  );
                })}
              </Box>
            </ScrollView>

            {/* btn & cart */}
            <Box style={styles.spaceDivider} mt="4">
              <Box flex={1}>
                <Button
                  label="buy now"
                  uppercase
                  bgcolor="black"
                  txtLeft
                  padddingSmall
                  txtBase
                />
              </Box>
              <TouchableOpacity>
                <Box
                  bg="gray900"
                  width={32}
                  height={32}
                  borderRadius="rounded-7xl"
                  alignItems="center"
                  justifyContent="center"
                  marginLeft="5"
                >
                  <Fontisto name="shopping-bag" size={18} color="white" />
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
};

export default ProductDetailScreen;
