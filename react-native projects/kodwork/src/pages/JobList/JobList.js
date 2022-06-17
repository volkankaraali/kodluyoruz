/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View,Text, SafeAreaView, ActivityIndicator, FlatList,ScrollView } from 'react-native';

import Config from 'react-native-config';
import JobCard from '../../components/JobCard/JobCard';

function JobList({navigation}) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getJobs(`https://www.themuse.com/api/public/jobs?page=${page}&api_key=${Config.API_KEY}`);
  }, [page]);

  

  const getJobs=async(url)=>{
    try {
      const {data}=await axios.get(url);
      page===1 ? setJobs(data.results): setJobs([...jobs,...data.results]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if(error){
    console.log(error);
  }

  if(loading){
    return <ActivityIndicator/>;
  }

  const getMoreJobs=()=>{
    setPage(page+1);
  };

  const renderJobs=({item})=><JobCard navigation={navigation} job={item} />;

  return (
    <SafeAreaView style={{backgroundColor:'#512DA8'}}>
      <FlatList 
        data={jobs} 
        renderItem={renderJobs}  
        keyExtractor={item=>item.id}
        onEndReached={getMoreJobs}
        ListFooterComponent={<ActivityIndicator color='white'/>}
      />
      
    </SafeAreaView>
  );
}

export default JobList;