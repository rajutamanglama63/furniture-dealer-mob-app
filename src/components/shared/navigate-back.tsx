import { Pressable } from "react-native";
import React from "react";
import { Box, Text, Theme } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { Ionicons } from "@expo/vector-icons";

type screenTitleProp = {
  screenTitle?: string;
};

const NavigateBack = ({ screenTitle }: screenTitleProp) => {
  const navigation = useNavigation();
  const theme = useTheme<Theme>();

  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={navigateBack}>
      <Box flexDirection="row" alignItems="center" mx="5.5">
        <Box
          bg="gray900"
          p="2"
          borderRadius="rounded-7xl"
          height={35}
          width={35}
        >
          <Ionicons name="chevron-back" size={17} color={theme.colors.white} />
        </Box>
        <Text variant="text2Xl" fontWeight="900" mx="5.5" letterSpacing={2}>
          {screenTitle}
        </Text>
      </Box>
    </Pressable>
  );
};

export default NavigateBack;
