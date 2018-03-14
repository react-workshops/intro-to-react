import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Feed from "./Feed";
import fetchImages from "./fetchImages";

import { Provider } from "react-redux";

import store from "./store";

import { StackNavigator } from "react-navigation";

import PhotoScreen from "./PhotoScreen";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Callstagram"
  };
  render() {
    return (
      <View
        style={styles.container}
        onLayout={e => {
          store.dispatch({
            type: "LAYOUT",
            layout: e.nativeEvent.layout
          });
        }}
      >
        <Feed
          navigation={this.props.navigation}
          renderLikeButton={(title, onPress) => (
            <TouchableOpacity onPress={onPress}>
              <Text>{title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const AppNavigator = StackNavigator({
  Home: HomeScreen,
  Photo: PhotoScreen
});

export default class App extends React.Component {
  componentDidMount() {
    fetchImages(store);
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  title: { fontSize: 48 },
  container: {
    backgroundColor: "#fafafa",
    flex: 1
  },
  topBar: {
    alignItems: "center",
    height: 60,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e2e2e2",
    paddingHorizontal: 64
  },
  logo: {
    height: 48,
    width: 48,
    marginRight: 16
  }
});
