import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { CardPetsTypes } from './types';

import { styles } from './styles';

export default function CardSwipePetsIcon({
  icon,
  color,
  ...props
}: CardPetsTypes & TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.circulate} {...props}>
      <Ionicons name={icon} size={35} color={color} />
    </TouchableOpacity>
  );
}
