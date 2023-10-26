import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import { HeaderProps } from './types';

import { styles } from './styles';

type HeaderWrapper = Pick<HeaderProps, 'children'>;

export function HeaderWrapper({ children }: HeaderWrapper) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      <StatusBar translucent />
      {children}
    </View>
  );
}
