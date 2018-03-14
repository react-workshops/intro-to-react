import React from "react";
import FeedItem from "./FeedItem";

import { connect } from "react-redux";

import { ScrollView, FlatList, Dimensions } from "react-native";

// const { width, height } = Dimensions.get("window");

class FeedWithItems extends React.PureComponent {
  render() {
    const { items, renderLikeButton } = this.props;
    console.log("Expensive render!!", items.length);
    return (
      <FlatList
        initialNumToRender={3}
        numColumns={2}
        style={{ flex: 1 }}
        data={items}
        renderItem={({ item }) => {
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

const Feed = connect(store => {
  return {
    items: store.items
  };
})(FeedWithItems);

export default Feed;
