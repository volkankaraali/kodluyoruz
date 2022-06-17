/* eslint-disable no-unused-vars */
import React from 'react';
import { View,Text, SafeAreaView, ActivityIndicator, FlatList,ScrollView, TouchableWithoutFeedback } from 'react-native';

import styles from './JobCard.style';

function JobCard({navigation,job}) {

  const handleJobClick=(jobId)=>{
    navigation.navigate('JobDetailPage',{jobId});
  };

  return (
    <TouchableWithoutFeedback onPress={()=>handleJobClick(job.id)}>
      <View style={styles.container}>
        <Text style={styles.name}>{job.name}</Text>
        <Text style={styles.company}>{job.company?.name}</Text>
        <Text style={styles.city}>{job.locations[0]?.name}</Text>
        <View style={styles.footer}>
          <Text style={styles.level}>{job.levels[0]?.name}</Text>
          <Text style={styles.categories}>{job.categories[0]?.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default JobCard;