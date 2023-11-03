import { Ionicons } from '@expo/vector-icons';

export interface CardPetsTypes {
  children?: React.ReactNode;
  gender?: keyof typeof Ionicons.glyphMap | string;
  src?: string;
  text?: string;
  isFavorite?: boolean;
}
