// import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

type HeaderIconProps = {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  color?: string;
} & TouchableOpacityProps;

export function HeaderIcon({ name, color, ...props }: HeaderIconProps) {
  return (
    <MaterialCommunityIcons
      name={name}
      size={25}
      color={color ? color : 'orange'}
      {...props}
    />
  );
}
