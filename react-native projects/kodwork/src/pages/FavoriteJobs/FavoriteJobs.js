import React from 'react';
import { SafeAreaView,FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';
function FavoriteJobs({navigation}) {

  const favoriteJobs=useSelector(state=>state.jobs.favoriteJobs);
  
  //console.log(favoriteJobs);

  const renderJob=({item})=><JobCard navigation={navigation} job={item} />;

  return (
    <SafeAreaView>
      <FlatList data={favoriteJobs} renderItem={renderJob} />
    </SafeAreaView>
  );
}

export default FavoriteJobs;