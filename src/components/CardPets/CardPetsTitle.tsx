import { Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { CardPetsTypes } from './types';

import { styles } from './styles';

export default function CardPetsTitle({ text, gender }: CardPetsTypes) {
  return (
    <View style={styles.XStackGender}>
      <Text style={styles.text}>{text}</Text>
      <Ionicons name={gender} size={20} color="orange" />
    </View>
  );
}
