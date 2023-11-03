import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { CardPetsTypes } from './types';

import { styles } from './styles';

export default function CardPetsCategoryWrapper({
  children,
  ...props
}: CardPetsTypes & TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.wrapper} {...props}>
      {children}
    </TouchableOpacity>
  );
}
