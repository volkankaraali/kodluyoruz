import React from 'react';
import { View,Text,Image,TouchableWithoutFeedback } from 'react-native';

function ProductCard({product,onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image}  source={{uri:category.strCategoryThumb}} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProductCard;