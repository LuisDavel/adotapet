import { Text, View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { HeaderProps } from './types';

import { styles } from './styles';

export function HeaderLocation({ city, state }: HeaderProps) {
  return (
    <View style={styles.XStack}>
      <FontAwesome5 name="map-marker-alt" size={20} color="red" />
      <Text style={[styles.text, { fontWeight: '600' }]}>{city},</Text>
      <Text style={styles.text}>{state}</Text>
    </View>
  );
}
