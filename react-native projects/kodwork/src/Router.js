/* eslint-disable no-unused-vars */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import JobList from './pages/JobList/JobList';
import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobDetail from './pages/JobDetail/JobDetail';
import { Provider } from 'react-redux';
import { store } from './context/store';
const Tab=createBottomTabNavigator();
const Stack=createNativeStackNavigator();


const JobsStack=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='JobListPage' 
        component={JobList}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name='JobDetailPage' 
        component={JobDetail} 
        options={{
          title:'Job Detail',
          headerStyle:{backgroundColor:'#673AB7'},
          headerTitleStyle:{color:'white'},
          headerTintColor:'white'
          
        }}
      />
    </Stack.Navigator>
  );
};


function Router() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Tab.Navigator
          screenOptions={({route})=>({
            tabBarActiveTintColor:'#FF9800',
            tabBarInactiveTintColor: 'white',
            tabBarStyle:{backgroundColor:'#673AB7'}
          })}
        >
          <Tab.Screen name='JobsTab' component={JobsStack} options={{
            tabBarLabel:'Jobs',
            tabBarLabelStyle:{fontSize:15,fontWeight:'bold'},
            headerShown:false,
            tabBarIcon:({color,size})=>(
              <Icon name='home' color={color} size={size} />
            ),
          }} />
          <Tab.Screen name='FavoriteJobsTab' component={FavoriteJobs} options={{
            tabBarLabel:'My Favorite Jobs',
            tabBarLabelStyle:{fontSize:15,fontWeight:'bold'},
            headerShown:false,
            tabBarIcon:({color,size})=>(
              <Icon name='account' color={color} size={size} />
            ),
          }} />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default Router;