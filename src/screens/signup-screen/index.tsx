import theme, { Box, Text } from "@/utils/theme";
import React from "react";
import { Image } from "react-native";
import styles from "./signup.style";
import NavigateBack from "@/components/shared/navigate-back";
import Input from "@/components/shared/input";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/shared/button";

const SignUpScreen = () => {
  const imgPath =
    "/home/fm-pc-lt-177/reactNative/furniture-dealer/furniture-mob-app/assets/undraw_Relaxing_at_home_re_mror.png";

  const inputFieldTitles = [
    {
      id: 1,
      name: "Username",
      icon: <EvilIcons name="user" size={24} style={styles.icon} />,
    },
    {
      id: 2,
      name: "Enter email",
      icon: <Ionicons name="mail-outline" size={20} style={styles.icon} />,
    },
    {
      id: 3,
      name: "Location",
      icon: <EvilIcons name="location" size={24} style={styles.icon} />,
    },
    {
      id: 4,
      name: "Password",
      icon: <EvilIcons name="lock" size={24} style={styles.icon} />,
    },
  ];
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
          <Box mx="1" my="5">
            {inputFieldTitles.map((field) => (
              <Box
                mb="5"
                key={field.id}
                borderRadius="rounded-4xl"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                bg="blu100"
              >
                {field.icon}
                <Input
                  // label={field}
                  placeholder={field.name}
                  labelAlignment="right"
                />
              </Box>
            ))}
          </Box>

          <Button label="sign up" uppercase bgcolor={theme.colors.green900} />
          <Text my="4" textAlign="center">
            or
          </Text>
          <Button label="google" uppercase bgcolor={theme.colors.blu400} />
        </Box>
      </Box>
    </>
  );
};

export default SignUpScreen;
