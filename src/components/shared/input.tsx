import theme, { Box, Text } from "@/utils/theme";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type InputProps = {
  label?: string;
  error?: undefined;
} & TextInputProps;

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <Box flexDirection="column">
      {label ? (
        <>
          <Text variant="textXs">{label}</Text>
        </>
      ) : null}
      <TextInput style={styles.inputField} {...props} />
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
  },
});
