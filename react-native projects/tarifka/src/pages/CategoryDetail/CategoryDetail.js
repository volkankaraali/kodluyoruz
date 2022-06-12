/* eslint-disable no-unused-vars */
import React from 'react';
import { View,Text,Image, FlatList,ImageBackground, TouchableWithoutFeedback  } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';

import styles from './CategoryDetail.style';

function CategoryDetail({route,navigation}) {
  const {id,categoryName} = route.params;

  const apiByCategory='https://www.themealdb.com/api/json/v1/1/filter.php?c=';

  const {data,loading,error}=useFetch(apiByCategory+categoryName);

 
  const handleProductClick=(id)=>{
    navigation.navigate('ProductDetailPage',{id});
  };

  const renderProduct=({item})=>(
    <TouchableWithoutFeedback onPress={()=>handleProductClick(item.idMeal)}>
      <ImageBackground source={{uri:item.strMealThumb}} style={styles.product_container}>
        <Text style={styles.product_title}>{item.strMeal}</Text>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );

  return (
    <FlatList  data={data.meals} renderItem={renderProduct} />
  );
}

export default CategoryDetail;