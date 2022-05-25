import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    width: '50%',
    padding: 10,
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  stockInfo: {
    color: 'red',
    fontWeight: 'bold',
  },
});
