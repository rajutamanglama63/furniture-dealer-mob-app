import React from "react";
import styles from "./signin.style";
import theme, { Box, Text } from "@/utils/theme";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { Image, TouchableOpacity } from "react-native";
import NavigateBack from "@/components/shared/navigate-back";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const imgPath =
    "/home/fm-pc-lt-177/reactNative/furniture-dealer/furniture-mob-app/assets/undraw_Relaxing_at_home_re_mror.png";

  const inputFieldTitles = [
    {
      id: 1,
      name: "Enter email",
      icon: <Ionicons name="mail-outline" size={20} style={styles.icon} />,
    },
    {
      id: 2,
      name: "Password",
      icon: <EvilIcons name="lock" size={24} style={styles.icon} />,
    },
  ];

  const navigation = useNavigation<any>();

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
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
            Unlimited Luxurious Furniture
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

          <Button label="sign in" uppercase bgcolor={theme.colors.green900} />
          <Text my="4" textAlign="center">
            or
          </Text>
          <Button label="google" uppercase bgcolor={theme.colors.blu400} />
          <TouchableOpacity onPress={navigateToSignUp}>
            <Text my="3" textAlign="center">
              Don't have an account? Register
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </>
  );
};

export default SignInScreen;
