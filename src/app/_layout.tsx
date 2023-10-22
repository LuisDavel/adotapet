import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export function Layout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="orange" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Slot />
      </TouchableWithoutFeedback>
    </>
  );
}
