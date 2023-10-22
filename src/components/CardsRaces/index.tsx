import { Text, View, StyleSheet } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

type CardRaceProps = {
  text: string;
  icon: string;
};

export function CardRace(props: CardRaceProps) {
  const { icon = 'dog', text = 'Cachorro' } = props;
  return (
    <View style={[styles.wrapper, styles.shadowProp]}>
      <View style={styles.circular_icon}>
        <FontAwesome5 name={icon} size={24} color="black" />
      </View>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circular_icon: {
    backgroundColor: 'orange',
    borderRadius: 50,
    padding: 6,
  },
  shadowProp: {
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    flexDirection: 'row',
    gap: 10,
    height: 50,
    padding: 6,
    width: 125,
  },
});
