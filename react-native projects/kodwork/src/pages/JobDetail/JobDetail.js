/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Button, ScrollView,Text,View,TouchableOpacity } from 'react-native';
import Config from 'react-native-config';
import { useDispatch, useSelector } from 'react-redux';
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './JobDetail.style';
import { addToFavroite, removeJob } from '../../context/jobs/jobSlice';

function JobDetail({route}) {

  const dispatch=useDispatch();

  const {jobId}=route.params;
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const isInFavorite=useRef(false);
  const favoriteJobs=useSelector(state=>state.jobs.favoriteJobs);
  



  useEffect(() => {
    fetchData(jobId);
    favoriteCheck();
    //eslint-disable react-hooks/exhaustive-deps 
  }, [jobId,isFavorite]);
  

  const favoriteCheck=()=>{
    const job=favoriteJobs.find(item=> item.id===jobId);
    if(job){
      setIsFavorite(true);
    }
  };

  const fetchData=async(id)=>{
    try {
      const {data}=await axios.get(`${Config.API_URL}/jobs/${id}`);
      setJob(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };


  const handleSubmitClick=(job)=>{
    Alert.alert('Submit',
      `Submit is successful.
      ${job.name}`);
  };

  const handleFavoriteClick=()=>{
    dispatch(addToFavroite({job}));
    setIsFavorite(true);
  };
  const handleRemoveFavoriteClick=()=>{
    dispatch(removeJob({job}));
    setIsFavorite(false);
  };

  if(loading){
    return <ActivityIndicator />;
  }

  if(error){
    Alert.alert('Error',error);
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{job.name}</Text>
      <View style={styles.company_container}>
        <Text style={styles.company_title}> <Icon name='briefcase' size={18}/> {job.company?.name}</Text>
        <Text style={styles.created_date}>{job?.publication_date}</Text>
      </View>
      <Text style={styles.category}> <Icon name='card-account-details-outline' size={18} /> {job.categories[0]?.name} </Text>
      <Text style={styles.level}> <Icon name='account-search-outline' size={18} /> {job.levels[0]?.name} </Text>
      <Text style={styles.location}><Icon name='map-marker' size={18} /> {job.locations[0]?.name} </Text>
      <HTMLView
        value={job.contents}
        stylesheet={styles.desc}
      />
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.submit_button} onPress={()=>handleSubmitClick(job)}>
          <Text style={styles.submit_text}><Icon name='check' size={18} /> Submit</Text>
        </TouchableOpacity>

        
        {
          isFavorite 
            ? 
            <TouchableOpacity style={styles.favorite_button} onPress={()=>handleRemoveFavoriteClick()}>
              <Text style={styles.favorite_text}><Icon name='cards-heart' size={18} /> Remove Favorite</Text> 
            </TouchableOpacity>
            : 
            <TouchableOpacity style={styles.favorite_button} onPress={()=>handleFavoriteClick()}>
              <Text style={styles.favorite_text}><Icon name='cards-heart-outline' size={18} /> Add Favorite</Text>
            </TouchableOpacity>
        }
      </View>
    </ScrollView>
  );
}

export default JobDetail;