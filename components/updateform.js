import React, { Component } from 'react';
import {Text, TextInput, View, Image, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios'


export default class UpdateForm extends Component {

  state = {
    newstate : []
  }


  handleSubmit = (id, e) => {
    newState = {
      media_buttons_id : this.props.post.media_buttons_id,
      image : this.state.image,
      post: this.state.post,
      day: this.state.day,
      time: this.state.time

   }

    axios.put(`http://localhost:8000/update/${id}`, this.state)
    .then(results => {
      console.log("UPDATE FORM RESULTS:", results);
    }).catch(error => {
      console.log(error)
  })
}


  render() {

    return (
      <View>

        <TextInput
          style={styles.inputs}
          image={
            <Image
              style={{height: 100, width: 100}}
              source={{uri : this.props.post.image}}
            />
          }
          onChangeText={(image) => this.setState({image})}
        />

        <TextInput
          style={styles.inputs}
          placeholder={this.props.post.post}
          onChangeText={(post) => this.setState({post})}
        />

        <TextInput
          style={styles.inputs}
          placeholder={this.props.post.day}
          onChangeText={(day) => this.setState({day})}
        />

        <TextInput
          style={styles.inputs}
          placeholder={this.props.post.time}
          onChangeText={(time) => this.setState({time})}
        />

        <Button
          buttonStyle={{ backgroundColor: "#dbdbd0",}}
          color='black'
          style={styles.littleButtons}
          title='Update'
          onPress={
            (e) => {this.handleSubmit(this.props.post.id, e), this.props.updateToggle(this.props.post.id)}
          }

        />

      </View>
    )
  }
}


const styles= StyleSheet.create({
  inputs : {
    height: 50,
    width: 200,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'grey',
    shadowOpacity: 0.3
  },
  littleButtons : {
    height: 40 ,
    width: 80 ,
    margin: 1
  }
})
