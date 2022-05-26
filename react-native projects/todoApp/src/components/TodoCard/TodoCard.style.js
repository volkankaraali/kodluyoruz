import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 5,
  },
  title: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  checkedText: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  checkedContainer: {
    borderColor: 'gray',
  },
});
