/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View,Text,FlatList } from 'react-native';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch/useFetch';


import styles from './Categories.style';

function Categories({navigation}) {

  const categoriApi='https://www.themealdb.com/api/json/v1/1/categories.php';
  
  const {data,error,loading}=useFetch(categoriApi);
   

  const handleCategoryClick=(id,categoryName)=>{
    navigation.navigate('ProductsByCategoryPage',{id,categoryName});
  };

  const renderCategory=({item})=><CategoryCard category={item} onPress={()=>handleCategoryClick(item.idCategory,item.strCategory)} />;


  if(loading){
    return <Loading/>;
  }

  if(error){
    return (
      <View style={styles.error_container}>
        <Text style={styles.error_text}>There is some problems. Try later.</Text>
        <Error/>
      </View>
    );
  }

  return (
    <FlatList style={{backgroundColor:'#ffa726'}} data={data.categories} renderItem={renderCategory} />
  );
}

export default Categories;