import { Image } from 'react-native';

import { CardPetsTypes } from './types';

import { styles } from './styles';

export default function CardPetsImage({ src }: CardPetsTypes) {
  return (
    <Image
      style={styles.image}
      resizeMode="cover"
      borderRadius={6}
      source={{ uri: src }}
    />
  );
}
