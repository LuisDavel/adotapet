import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  circulate: {
    backgroundColor: 'white',
    borderRadius: 100,
    elevation: 2,
    padding: 6,
  },
  image: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    borderColor: 'lightgrey',
    borderWidth: 2,
    height: width,
    width: width * 0.78,
  },
  describe: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: width * 0.78,
  },
  wrapper: {
    flex: 1,
  },
  text: {
    color: 'orange',
    fontSize: 18,
    fontWeight: '400',
  },
  sub_text: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '400',
  },
  xStack: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    position: 'relative',
  },
});
