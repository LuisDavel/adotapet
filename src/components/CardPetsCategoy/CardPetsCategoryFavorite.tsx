import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { CardPetsTypes } from './types';

import { styles } from './styles';

interface CardPetsFavoriteTypes extends CardPetsTypes, TouchableOpacityProps {}

export default function CardPetsCategoryFavorite({
  isFavorite = true,
  ...props
}: CardPetsFavoriteTypes) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.circle_favorite}
      {...props}
    >
      {isFavorite ? (
        <FontAwesome name="heart" size={20} color="orange" />
      ) : (
        <FontAwesome5 name="heart" size={20} color="orange" />
      )}
    </TouchableOpacity>
  );
}
