import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchButton.style';
const SearchButton = () => {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={input}
        onChangeText={setInput}
      />
    </View>
  );
};

export default SearchButton;
