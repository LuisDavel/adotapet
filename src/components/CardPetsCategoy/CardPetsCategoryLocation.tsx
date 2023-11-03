import { Text, View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { CardPetsTypes } from './types';

import { styles } from './styles';

export default function CardPetsCategoryLocation({ text }: CardPetsTypes) {
  return (
    <View style={styles.XStack}>
      <FontAwesome5 name="map-marker-alt" size={20} color="orange" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
