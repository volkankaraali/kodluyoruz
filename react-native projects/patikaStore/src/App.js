import React from 'react';
import {SafeAreaView, Text, FlatList, View, StyleSheet} from 'react-native';
import ProductCard from './components/ProductCard/ProductCard';
import SearchButton from './components/SearchButton/SearchButton';

import products from './data.json';
const App = () => {
  const renderProducts = ({item}) => <ProductCard item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <SearchButton />
      <FlatList
        data={products}
        horizontal={false}
        numColumns={2}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    color: '#800080',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
export default App;
