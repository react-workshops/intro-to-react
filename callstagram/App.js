import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";
import Feed from "./Feed";

import { Provider } from "react-redux";

import { store, persistor } from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";

import { StackNavigator, TabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import PhotoScreen from "./PhotoScreen";

store.subscribe(() => {
  console.log("Store has changed: ", store.getState());
});

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

class LikedScreen extends React.Component {
  static navigationOptions = {
    title: "Liked"
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
          getItemsFromStore={store => {
            return store.likedItems.map(likedItemKey => {
              return store.items.find(i => i.key === likedItemKey);
            });
          }}
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

const MainNavigator = StackNavigator({
  Home: HomeScreen,
  Photo: PhotoScreen
});
MainNavigator.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused, tintColor }) => {
    const iconName = `ios-home${focused ? "" : "-outline"}`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const LikedNavigator = StackNavigator({
  Liked: LikedScreen,
  Photo: PhotoScreen
});
LikedNavigator.navigationOptions = {
  tabBarLabel: "Liked",
  tabBarIcon: ({ focused, tintColor }) => {
    const iconName = `ios-heart${focused ? "" : "-outline"}`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const SettingsScreen = ({}) => (
  <ScrollView>
    <Button title="Hello" onPress={() => {}} />
  </ScrollView>
);
SettingsScreen.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused, tintColor }) => {
    const iconName = `ios-options${focused ? "" : "-outline"}`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const AppNavigator = TabNavigator({
  Main: MainNavigator,
  Liked: LikedNavigator,
  Settings: SettingsScreen
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
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
