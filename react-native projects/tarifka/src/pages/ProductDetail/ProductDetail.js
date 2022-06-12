/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { ScrollView,View,Text,Image, TouchableOpacity, Linking, Alert } from 'react-native';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch/useFetch';

import styles from './ProductDetail.style';

function ProductDetail({route}) {

  const {id}=route.params;
  const api='https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  const {data,loading,error}=useFetch(api+id);


  const handleOpenVideo= async(url)=>{
    const supported=await Linking.canOpenURL(url);
    if(supported){
      await Linking.openURL(url);
    }
    else{
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };  


  if(loading){
    return <Loading/>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri:data?.meals[0]?.strMealThumb}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data?.meals[0]?.strMeal}</Text>
        <Text style={styles.desc}>{data?.meals[0]?.strInstructions}</Text>
        <Text style={styles.tags}>Tags: {data?.meals[0]?.strTags}</Text>
        <TouchableOpacity style={styles.button_container} onPress={()=>handleOpenVideo(data?.meals[0]?.strYoutube)}>
          <Text style={styles.button_text}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ProductDetail;