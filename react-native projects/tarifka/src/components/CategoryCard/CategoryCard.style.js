import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    margin:10,
    flexDirection:'row',
  },
  body_container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },
  image:{
    width:100,
    minHeight:90,
    resizeMode:'contain',
    backgroundColor:'white',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },
  title:{
    fontWeight:'bold',
    fontSize:22,
    color:'#283593'
  },
  
});