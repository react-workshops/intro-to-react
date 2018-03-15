import React from "react";
import FeedItem from "./FeedItem";

import { connect } from "react-redux";
import fetchImages from "./fetchImages";

import { ScrollView, FlatList, Dimensions, Text, View } from "react-native";

// const { width, height } = Dimensions.get("window");

const MIN_LENGTH = 150;

class FeedWithItems extends React.PureComponent {
  state = { error: null };
  componentDidMount() {
    this.initialLoad();
    setTimeout(() => {
      this._flatList && this._flatList.scrollToEnd();
    }, 1500);
  }
  initialLoad() {
    if (this.props.items.length > MIN_LENGTH) {
      return;
    }
    fetchImages()
      .then(images => this.props.onDelivery(images))
      .catch(e => {
        // myInfrastructure.reportError(e);
        this.setState({ error: true });
      });
  }

  _onEndReached = () => {
    fetchImages()
      .then(images => this.props.onDelivery(images))
      .catch(e => {
        // myInfrastructure.reportError(e);
        this.setState({ error: true });
      });
  };

  render() {
    const { items, renderLikeButton } = this.props;
    const { error } = this.state;
    console.log("Expensive render!!", items.length);
    if (this.props.items.length < MIN_LENGTH) {
      return (
        <View style={{}}>
          <Text style={{ textAlign: "center", fontSize: 24 }}>Loading...</Text>
        </View>
      );
    }
    if (error) {
      return (
        <View style={{}}>
          <Text style={{ color: "#dd6666", textAlign: "center", fontSize: 24 }}>
            Something went wrong!
          </Text>
        </View>
      );
    }
    return (
      <FlatList
        initialNumToRender={3}
        numColumns={2}
        style={{ flex: 1 }}
        data={items}
        ref={flatList => {
          this._flatList = flatList;
        }}
        onEndReached={this._onEndReached}
        renderItem={({ item }) => {
          debugger;
          return (
            <FeedItem
              id={item.key}
              key={item.key}
              navigation={this.props.navigation}
              renderLikeButton={renderLikeButton}
            />
          );
        }}
      />
    );
  }
}

const Feed = connect(
  (store, props) => {
    return {
      items: props.getItemsFromStore
        ? props.getItemsFromStore(store)
        : store.items
    };
  },
  dispatch => {
    return {
      onDelivery: images =>
        dispatch({
          type: "DOGGIE_DELIVERY",
          images
        })
    };
  }
)(FeedWithItems);

export default Feed;
