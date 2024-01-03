import { Box, Text } from "@/utils/theme";
import React from "react";
import { Image } from "react-native";
import styles from "./signup.style";
import NavigateBack from "@/components/shared/navigate-back";
import Input from "@/components/shared/input";

const SignUpScreen = () => {
  const imgPath =
    "/home/fm-pc-lt-177/reactNative/furniture-dealer/furniture-mob-app/assets/undraw_Relaxing_at_home_re_mror.png";

  const inputFieldTitles = ["Username", "Enter email", "Location", "Password"];
  return (
    <>
      <Box flex={1} bg="white">
        <Box style={styles.top}>
          <Image source={require(imgPath)} style={styles.topImg} />
        </Box>
        <Box style={styles.backBtn}>
          <NavigateBack />
        </Box>
        <Box style={styles.bottom}>
          <Text
            variant="textXl"
            fontWeight="bold"
            color="green900"
            textAlign="center"
          >
            Sign up and start shopping
          </Text>
          {inputFieldTitles.map((field, index) => (
            <>
              <Box mb="2">
                <Input key={index} label={field} placeholder={field} />
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SignUpScreen;
