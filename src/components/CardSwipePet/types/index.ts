import { Ionicons } from '@expo/vector-icons';
export interface CardPetsTypes {
  children?: React.ReactNode;
  color?: string;
  src?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  isFavorite?: boolean;
}
