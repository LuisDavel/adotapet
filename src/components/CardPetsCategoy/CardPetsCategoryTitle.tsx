import { Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { CardPetsTypes } from './types';

import { styles } from './styles';

export default function CardPetsCategoryTitle({ text, gender }: CardPetsTypes) {
  return (
    <View style={styles.XStackGender}>
      <Text style={styles.text}>{text}</Text>
      <Ionicons
        name={gender as keyof typeof Ionicons.glyphMap}
        size={20}
        color="orange"
      />
    </View>
  );
}
