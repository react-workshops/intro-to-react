import React from "react";

import {
  TextInput,
  View,
  Text,
  Button,
  Switch,
  AsyncStorage
} from "react-native";

class InputTodo extends React.Component {
  state = { text: "" };
  render() {
    return (
      <View>
        <TextInput value={this.state.text} onChangeText={this._onNameChange} />
        <Button onPress={this._onSubmit} title="Create" />
      </View>
    );
  }
  _onNameChange = name => {
    this.setState({
      text: name
    });
  };
  _onSubmit = () => {
    this.setState({ text: "" });
    this.props.onNewTodo({ text: this.state.text, id: `ID-${Date.now()}` });
  };
}

class TodoItem extends React.PureComponent {
  render() {
    const { todo, onToggle } = this.props;
    return (
      <View>
        <Switch value={todo.isDone} onChange={this._onDoneSwitch} />
        <Text>{todo.text}</Text>
      </View>
    );
  }
  _onDoneSwitch = e => {
    this.props.onToggle(this.props.todo.id);
  };
}
const INIT_TODOS = [];
export default class TodoApp extends React.Component {
  state = null;

  async componentDidMount() {
    let state = {
      todos: INIT_TODOS
    };
    try {
      const stateJSON = await AsyncStorage.getItem("todos");
      const storageState = JSON.parse(stateJSON);
      if (storageState) {
        state = storageState;
      }
    } catch (e) {}

    this.setState(state);
  }

  _onToggle = id => {
    console.log({ id });

    this._update(lastState => ({
      todos: lastState.todos.map(
        todo =>
          todo.id !== id
            ? todo
            : {
                ...todo,
                isDone: !todo.isDone
              }
      )
    }));
  };

  render() {
    console.log("Rendering app", this.state);
    if (!this.state) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View>
        {this.state.todos.map((todo, todoIndex) => (
          <TodoItem todo={todo} key={todo.id} onToggle={this._onToggle} />
        ))}
        <InputTodo onNewTodo={this._onNewTodo} />
      </View>
    );
  }

  _update = stateSetter => {
    this.setState(stateSetter, async () => {
      await AsyncStorage.setItem("todos", JSON.stringify(this.state));
    });
  };

  _onNewTodo = todo => {
    this._update(lastState => ({
      todos: [todo, ...lastState.todos]
    }));
  };
}
