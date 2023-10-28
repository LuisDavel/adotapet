import { StyleSheet } from 'react-native';

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
    height: 200,
    width: 200,
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '600',
  },
  wrapper: {
    alignItems: 'center',
    borderRadius: 16,
    gap: 6,
    position: 'relative',
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
