import {StyleSheet,Dimensions} from 'react-native';

const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
  container:{
    backgroundColor:'white'
  },
  image:{
    width:deviceSize.width,
    height:deviceSize.height/2
  },
  body_container:{
    padding:10,
    
  },
  title:{
    fontSize:26,
    fontWeight:'bold',
    marginVertical:5,
    color:'#283593'
  },
  desc:{
    fontSize:16,
    color:'black',
    fontFamily:'sans-serif-light',
    fontWeight:'bold',
    marginVertical:10
  },
  tags:{
    fontWeight:'bold',
  },
  button_container:{
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    marginVertical:10,
    borderRadius:10
  },
  button_text:{
    color:'white',
    fontWeight:'bold',
    fontSize:16,
  }

  
});