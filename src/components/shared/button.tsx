import { Box, Text } from "@/utils/theme";
import { Pressable } from "react-native";

type ButtonProps = {
  label: string;
  onLongPress?: () => void;
  onPress?: () => void;
  disabled?: boolean;
  uppercase: boolean;
  bgcolor?: string;
  padddingSmall?: boolean;
  txtBase?: boolean;
  txtLeft?: boolean;
  txtRight?: boolean;
};

const Button = ({
  label,
  onLongPress,
  onPress,
  disabled,
  uppercase,
  bgcolor,
  padddingSmall,
  txtBase,
  txtLeft,
  txtRight,
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <Box
        // bg={disabled ? "gray800" : color}
        py={padddingSmall ? "1" : "3.5"}
        px="3.5"
        borderRadius="rounded-7xl"
        style={{ backgroundColor: disabled ? "gray800" : bgcolor }}
      >
        <Text
          variant={txtBase ? "textBase" : "textXs"}
          fontWeight="700"
          color="white"
          textAlign={txtLeft ? "left" : txtRight ? "right" : "center"}
          textTransform={uppercase ? "uppercase" : "none"}
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;
