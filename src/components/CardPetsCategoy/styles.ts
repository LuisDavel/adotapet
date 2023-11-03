import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  circle_favorite: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 5,
    height: 35,
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    top: 5,
    width: 35,
    zIndex: 1,
  },
  image: {
    flex: 1,
    height: 200,
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '600',
  },
  wrapper: {
    backgroundColor: 'rgba(236, 236, 236, 1)',
    borderRadius: 10,
    gap: 6,
    position: 'relative',
    width: width * 0.42,
  },
  XStack: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 6,
  },
  XStackGender: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'space-between',
  },
});
