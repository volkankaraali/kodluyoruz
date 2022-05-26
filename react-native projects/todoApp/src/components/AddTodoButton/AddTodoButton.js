import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import styles from './AddTodoButton.style';
function AddTodoButton({todos, setTodos}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInput, setTodoInput] = useState('');
  const openModal = () => {
    setModalVisible(true);
  };

  const addTodo = todo => {
    const randomId = Math.floor(Math.random() * 100) + 1;
    setModalVisible(!modalVisible);
    setTodos([...todos, {id: randomId, title: todo, isDone: false}]);
    setTodoInput('');
  };
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Todo</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type a todo"
              value={todoInput}
              onChangeText={setTodoInput}
            />
            <Pressable
              style={styles.modalButtonClose}
              onPress={() => addTodo(todoInput)}>
              <Text style={styles.modalButtonText}>Add</Text>
            </Pressable>
            <Pressable
              style={styles.closeModalButton}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeModalButtonText}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddTodoButton;
