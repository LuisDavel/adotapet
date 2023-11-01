import { Text, StyleSheet } from 'react-native';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = {
  text: string;
  color?: {
    backgroundColor: string;
    color?: string;
  };
  isLoading?: boolean;
} & TouchableOpacityProps;

export default function Button({
  isLoading,
  text,
  color,
  ...props
}: ButtonProps) {
  const background = color && color.backgroundColor;
  const colorText = color && color.color;

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.button, { backgroundColor: background }]}
      activeOpacity={0.7}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={'white'} />
      ) : (
        <Text style={{ color: colorText }}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563eb',
  },
});
