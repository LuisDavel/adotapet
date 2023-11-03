import { Text, StyleSheet } from 'react-native';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = {
  text: string;
  alert?: string;
  isLoading?: boolean;
} & TouchableOpacityProps;

export default function Button({
  isLoading,
  text,
  alert,
  ...props
}: ButtonProps) {
  const background = alert ? styles.alert_button : null;

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.button, background]}
      activeOpacity={0.9}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={'white'} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  alert_button: {
    backgroundColor: 'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 12,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
