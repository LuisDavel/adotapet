import { FontAwesome5 } from '@expo/vector-icons';

import { HeaderProps } from './types';

export function HeaderAvatar({ userImage = undefined }: HeaderProps) {
  return <FontAwesome5 name="user" size={25} color="black" />;
}
