import { View } from 'react-native';

import { HeaderProps } from './types';

import { styles } from './styles';

type HeaderWrapper = Pick<HeaderProps, 'children'>;

export function HeaderWrapper({ children }: HeaderWrapper) {
  return <View style={styles.wrapper}>{children}</View>;
}
