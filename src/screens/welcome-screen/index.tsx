import { Image } from "react-native";
import React from "react";
import styles from "./welcome.style";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import theme, { Box, Text } from "@/utils/theme";
import Button from "@/components/shared/button";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/types";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const imagePath =
    "/home/fm-pc-lt-177/reactNative/furniture-dealer/furniture-mob-app/assets/Welcome-bro.png";

  const navigateToSignupScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} justifyContent="center">
        <Box alignItems="center" mb="3.5">
          <Image source={require(imagePath)} style={styles.welcomeImg} />
        </Box>
        <Text textAlign="center" variant="text3Xl" fontWeight="700">
          Welcome!
        </Text>
        <Text
          textAlign="center"
          variant="textSm"
          fontWeight="400"
          color="gray550"
        >
          Join with us for geniune furniture product
        </Text>
        <Box my="3.5" mx="10">
          <Button
            label="Get started"
            uppercase
            onPress={navigateToSignupScreen}
            bgcolor={theme.colors.green900}
          />
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
