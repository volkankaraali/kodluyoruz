import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import AddTodoButton from './components/AddTodoButton';
import TodoCard from './components/TodoCard';
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'React-Native ile TodoApp yap',
      isDone: true,
    },
    {
      id: 2,
      title: 'test todo',
      isDone: false,
    },
  ]);

  const renderTodo = ({item}) => (
    <TodoCard
      todo={item}
      changeTodoStatus={changeTodoStatus}
      deleteTodo={deleteTodo}
    />
  );

  const changeTodoStatus = todoId => {
    console.log(todoId);
    let newTodos = todos.filter(item => {
      if (item.id === todoId) {
        return (item.isDone = true);
      }
      return item;
    });
    setTodos(newTodos);
  };

  const deleteTodo = todoId => {
    let newTodos = todos.filter(item => item.id !== todoId);
    setTodos(newTodos);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Yapılacaklar</Text>
        <Text style={styles.todoCount}>{todos.length}</Text>
      </View>

      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={renderTodo}
      />
      <AddTodoButton todos={todos} setTodos={setTodos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },
  todoCount: {
    fontSize: 20,
    color: 'green',
  },
});

export default App;
