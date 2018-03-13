import React from "react";

import Feed from "./Feed";

import { StyleSheet, View, Image, Text } from "react-native";

import fetchImages from "./fetchImages";

class App extends React.Component {
  async componentDidMount() {
    await fetchImages();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Image source={require("./callstack.png")} style={styles.logo} />
          <Text style={styles.title}>Callstagram</Text>
        </View>
        <Feed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: { fontSize: 48 },
  container: {
    backgroundColor: "#fafafa"
  },
  topBar: {
    alignItems: "center",
    height: 60,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 32,
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

export default App;
