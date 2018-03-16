import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export default class App extends Component {
  state = { text: "Welcome to React Native!" };
  render() {
    if (!this.state.text) {
      return (
        <View testID="foo">
          <Text>Done!</Text>
        </View>
      );
    }
    return (
      <View style={styles.container} testID="welcome">
        <Text style={styles.welcome}>{this.state.text}</Text>
        <Button
          testID="hello_button"
          onPress={() => {
            this.setState({ text: "Hello!!!" });
          }}
          title="foo"
        />
        <Button
          testID="world_button"
          onPress={() => {
            this.setState({ text: null });
          }}
          title="foo"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
