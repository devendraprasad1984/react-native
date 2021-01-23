import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity
} from 'react-native';
import { Config } from '../../common/Config';


export default class UserDetails extends Component {
	constructor(props){
		super(props)
		this.state={
			userName:'',
			userEmail:'',
            userMobile:'',
		}
	}

	userRegister = () =>{

		let {userName} = this.state;
		let {userEmail} = this.state;
        let {userMobile} = this.state;


		// fetch('http://192.168.1.11:181/bdf-app/backend/api/registration/register.php', {
            fetch(Config.userDetailEndPoint, {
			method: 'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				name: userName,
				email_id: userEmail,
                mobile_no: userMobile,
			})

		})
		.then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
			})
			.catch((error)=>{
				console.error(error);
            });
            console.log(userName);
            console.log(userEmail);
            console.log(userMobile);
	}

  render() {
    return (
	<View style={styles.container}>
    <Text style={{fontSize:30,fontWeight:'bold', color:'purple'}}>Enter your details</Text>
	<Text></Text>
	  <TextInput
	  placeholder="  Enter Name"
	  style={{width:250,margin:10, borderColor:"#333",
	  borderWidth:1}}
	  underlineColorAndroid="transparent"
  onChangeText= {userName => this.setState({userName})}

	  />

	  <TextInput
	  placeholder="  Enter Email"
	  style={{width:250,margin:10, borderColor:"#333",
	  borderWidth:1}}
	  underlineColorAndroid="transparent"
	  onChangeText= {userEmail => this.setState({userEmail})}
	  />

	  <TextInput
	  placeholder="  Enter Mobile No."
	  style={{width:250,margin:10, borderColor:"#333",
	  borderWidth:1}}
	  underlineColorAndroid="transparent"
	  onChangeText= {userMobile => this.setState({userMobile})}
	  />

	  <TouchableOpacity
		onPress={this.userRegister}
		style={{width:250,padding:10, backgroundColor:'purple',
		alignItems:'center',}}>
	  <Text style={{ color:'white'}} >Register</Text>
	  </TouchableOpacity>
     </View>

   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('register', () => register);
