import {StyleSheet,Dimensions} from 'react-native';

const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
  product_container:{
    marginBottom:10,
    width:deviceSize.width,
    height:deviceSize.height/4,
    flex:1,
    justifyContent:'flex-end'
  },

  product_title:{
    fontWeight:'bold',
    fontSize:20,
    color:'#283593',
    backgroundColor:'orange',
    textAlign:'center'
  }
  
});