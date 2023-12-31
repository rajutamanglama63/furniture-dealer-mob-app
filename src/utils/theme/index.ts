import { createBox, createText, createTheme } from "@shopify/restyle";
import { colors } from "./colors";
import { textVariants } from "./text-varients";

const theme = createTheme({
  colors: colors,
  spacing: {
    "1": 4,
    "1.5": 5,
    "2": 8,
    "3": 12,
    "3.5": 14,
    "4": 16,
    "5": 20,
    "5.5": 22,
    "6": 24,
    "10": 40,
    "11": 44,
    "12": 48,
    "13": 56,
    "14": 65,
  },
  borderRadii: {
    none: 0,
    rounded: 4,
    "rounded-xl": 8,
    "rounded-2xl": 10,
    "rounded-3xl": 12,
    "rounded-4xl": 16,
    "rounded-5xl": 20,
    "rounded-7xl": 28,
    "rounded-8xl": 35,
    "rounded-9xl": 42,
    "rounded-10xl": 48,
    "rounded-11xl": 55,
  },
  textVariants,
});

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;
