import { View } from 'react-native';

import { CardPetsTypes } from './types';

import { styles } from './styles';

export default function CardSwipePetsWrapper({ children }: CardPetsTypes) {
  return <View style={styles.wrapper}>{children}</View>;
}
