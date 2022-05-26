import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import styles from './TodoCard.style';
function TodoCard({todo, changeTodoStatus, deleteTodo}) {
  return (
    <TouchableOpacity
      style={[styles.container, todo.isDone && styles.checkedContainer]}
      onPress={() => changeTodoStatus(todo.id)}
      onLongPress={() => deleteTodo(todo.id)}>
      <Text style={[styles.title, todo.isDone && styles.checkedText]}>
        {todo.title}
      </Text>
    </TouchableOpacity>
  );
}

export default TodoCard;
