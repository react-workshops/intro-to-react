import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Animated
} from "react-native";

export default class App extends React.Component {
  state = {
    opacity: new Animated.Value(0)
  };
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "palevioletred" }}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "blue",
            opacity: this.state.opacity,
            transform: [
              {
                translateY: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0]
                })
              }
            ]
          }}
        />
      </View>
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
