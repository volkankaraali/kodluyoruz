import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import CategoryDetail from './pages/CategoryDetail/CategoryDetail';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Stack = createNativeStackNavigator();

function Router(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title:'TARİFKA',
          headerStyle:{backgroundColor:'#ffa726'},
          headerTitleStyle:{color:'#283593',fontSize:25,fontWeight:'bold'},
          headerTitleAlign:'center',

        }}/>
        <Stack.Screen name="ProductsByCategoryPage" component={CategoryDetail} options={{
          title:'TARİFKA',
          headerStyle:{backgroundColor:'#ffa726'},
          headerTitleStyle:{color:'#283593',fontSize:25,fontWeight:'bold'},
          headerTitleAlign:'center',

        }}/>
        <Stack.Screen name="ProductDetailPage" component={ProductDetail} options={{
          title:'TARİFKA',
          headerStyle:{backgroundColor:'#ffa726'},
          headerTitleStyle:{color:'#283593',fontSize:25,fontWeight:'bold'},
          headerTitleAlign:'center',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;