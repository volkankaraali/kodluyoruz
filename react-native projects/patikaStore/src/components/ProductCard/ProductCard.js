import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ProductCard.style';
function ProductCard({item}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.imgURL}} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.price}</Text>
      {!item.inStock && <Text style={styles.stockInfo}>NO STOCK</Text>}
    </View>
  );
}

export default ProductCard;
