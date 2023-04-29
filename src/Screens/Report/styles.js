import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
   
  },
  header:{
    padding:24,
    marginTop:24,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#006557',
  },
  titulo:{
    fontWeight:'semibold',
    fontSize:20,
    color:'#fff',
    marginRight:10,
  },
  containerForm:{
    padding:35,
  },
  containerCheck:{
    marginTop:10,
    
    gap:24,
  },
  checkboxInput:{
    flexDirection:'row',
    alignItems:'flex-start',
  },
  touchable:{
    height: 24,
    width: 24,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#dadada',
    borderWidth:2,
    marginTop:3,

  },
  opText:{
    marginLeft:12,
    fontSize:18,
    fontWeight:'medium',
    color:'#424F4D'
  },
  containerInput:{
    marginTop:24,
    gap:24,
  },
  inputTitle:{
    width:'100%',
    borderRadius:3,
    borderWidth:1,
    borderColor:'#dadada',
    padding:16,
  },
  inputDescription:{
    width:'100%',
    height:150,
    borderRadius:3,
    borderWidth:1,
    borderColor:'#dadada',
    padding:16,
    textAlignVertical:'top',
    fontSize:14,
  },
  button:{
    marginTop:30,
    width:'100%',
    height:50,
    borderRadius:5,
    backgroundColor:'#07689f',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    fontSize:18,
    fontWeight:'medium',
    color:'#fff',
  },


})