import { View } from 'react-native';

import { CardPetsTypes } from './types';

import { styles } from './styles';

export default function CardSwipePetsXStack({ children }: CardPetsTypes) {
  return <View style={styles.xStack}>{children}</View>;
}
