import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Feed from "./Feed";
import fetchImages from "./fetchImages";

import { Provider } from "react-redux";

import store from "./store";

export default class App extends React.Component {
  componentDidMount() {
    fetchImages();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Image source={require("./callstack.png")} style={styles.logo} />
            <Text style={styles.title}>Callstagram</Text>
          </View>
          <Feed />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  title: { fontSize: 48 },
  container: {
    paddingTop: 20,
    backgroundColor: "#fafafa"
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
