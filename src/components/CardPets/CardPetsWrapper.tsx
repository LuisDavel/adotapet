import { View } from 'react-native';

import { CardPetsTypes } from './types';

import { styles } from './styles';

export default function CardPetsWrapper({ children }: CardPetsTypes) {
  return <View style={styles.wrapper}>{children}</View>;
}
