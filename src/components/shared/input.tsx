import theme, { Box, Text } from "@/utils/theme";
import { EvilIcons } from "@expo/vector-icons";

import { StyleSheet, TextInput, TextInputProps } from "react-native";

type InputProps = {
  label?: string;
  error?: undefined;
  labelAlignment?: "auto" | "center" | "left" | "right" | "justify" | undefined;
} & TextInputProps;

const Input = ({ label, error, labelAlignment, ...props }: InputProps) => {
  return (
    <Box flexDirection="column" flex={1}>
      {label ? (
        <>
          <Text
            variant="textXs"
            mb="1.5"
            textAlign={labelAlignment}
            fontWeight="400"
          >
            {label}
          </Text>
        </>
      ) : null}
      <Box flexDirection="row">
        <TextInput style={styles.inputField} {...props} />
      </Box>
    </Box>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputField: {
    padding: 14,
    width: "100%",
    backgroundColor: theme.colors.blu100,
    borderRadius: theme.borderRadii["rounded-4xl"],
    color: theme.colors.gray4,
  },
});
