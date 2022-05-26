import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  button: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 300,
    height: 200,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
  },
  closeModalButton: {
    backgroundColor: 'green',
    position: 'absolute',
    right: 10,
    top: 10,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  closeModalButtonText: {
    color: 'white',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
  },
  modalButtonClose: {
    backgroundColor: 'green',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  modalButtonText: {
    color: 'white',
  },
});
