//import stuff
import React from 'react';
import {View,Text,TextInput, Button} from 'react-native';

//create stuff
class App extends React.Component{
  state = {
    text :"",
    todo : []
  }
  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return(
        <Text key={t}>{t}</Text>
      )
    })
  }
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>Pequeña app Todo</Text>
        <TextInput
        style={styles.inputStyle}
        onChangeText={(text)=>this.setState({text})}
        value={this.state.text}
        />
        <Button
        title="Add Todo"
        color="skyblue"
        onPress={this.addTodo}
        />
        {this.renderTodos()}
      </View>
    )
  }
}

const styles = {
  viewStyle:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
  },
  inputStyle:{
    height:40,
    width: 300,
    borderColor: "powderblue",
    borderWidth: 1 
  }
}

//export stuff
export default App;