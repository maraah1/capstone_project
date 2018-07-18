import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import axios from 'axios';

export default class Register extends Component {

state = {
  name: '',
  email: '',
  password: ''
}

handleSubmit = e => {
console.log("register submit hit")
axios.post(`http://localhost:8000/register`, this.state)
   .then(response => {
     console.log("register response:", response.data)
     const { navigate } = this.props.navigation
     navigate('Fourth', { user : response.data})
 })
}



render(){

 const {navigate} = this.props.navigation

  return (
    <View style={styles.container}>

      <Header
        outerContainerStyles={{ backgroundColor: '#8ee6e0' }}
        centerComponent={{ text: 'SoMa', style: { color: '#fff' } }}
        leftComponent={
          <Icon
          name='keyboard-arrow-left'
          onPress = {
            () => navigate('First', {})
          }
        />
      }
        >


      </Header>


<View style={styles.inputs}>
    <TextInput
      style={styles.textBox}
      onChangeText={(name) => this.setState({name})}
      autoCapitalize= 'none'
      placeholder= "Enter Name"
      value={this.state.name}
    />

    <TextInput
      style={styles.textBox}
      onChangeText={(email) => this.setState({email})}
      autoCapitalize= 'none'
      placeholder= "Enter Email"
      value={this.state.email}
    />

    <TextInput
      style={styles.textBox}
      onChangeText={(password) => this.setState({password})}
      autoCapitalize= 'none'
      placeholder= "Enter Password"
      value={this.state.password}
    />
</View>


    <Button
      style={styles.buttons}
      raised
      buttonStyle={{
         backgroundColor: "#8ee6e0",
      }}
      onPress = {
        (e) => {this.handleSubmit()}
      }
      title = "Register"
    />
    </View>
  )
}

}



styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  textBox: {
    height: 20 + '%',
    width: 70 + '%',
    marginLeft : 15 + '%',
    marginBottom : 20,
    borderBottomWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'grey',
    shadowOpacity: 0.3

  },

  inputs: {
    flex: 1,
    justifyContent: 'center'
  },

  buttons: {
    width: 40 + '%',
    marginLeft: 30 + '%',
    marginBottom : 50 + '%'

  },

})
