import { Image, View, Text } from 'react-native';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

type CardPetsTypes = {
  src: string;
  text: string;
  age: string | number;
  locale: string;
  gender: keyof typeof Ionicons.glyphMap;
};

export default function CardSwipePetsImage({
  src,
  text,
  age,
  locale,
  gender,
}: CardPetsTypes) {
  return (
    <>
      <Image
        style={styles.image}
        resizeMode="cover"
        borderRadius={6}
        source={{ uri: src }}
      />
      <View style={styles.describe}>
        <View>
          <Text style={styles.text}>
            {text}, {age}{' '}
          </Text>

          <Text style={styles.sub_text}>
            <FontAwesome5 name="map-marker-alt" size={14} color="red" />{' '}
            {locale}
          </Text>
        </View>
        <Ionicons
          name={gender}
          size={30}
          color={gender == 'female' ? '#c85f9a' : '#49aae1'}
        />
      </View>
    </>
  );
}
