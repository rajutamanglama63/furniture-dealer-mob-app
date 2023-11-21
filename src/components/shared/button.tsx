type ButtonProps = {
  label: string;
  onLongPress?: () => void;
  onPress: () => void;
  disabled?: boolean;
  uppercase: boolean;
};

const Button = ({
  label,
  onLongPress,
  onPress,
  disabled,
  uppercase,
}: ButtonProps) => {};
