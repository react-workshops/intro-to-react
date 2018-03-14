import React from "react";
import { View, Image } from "react-native";

import { connect } from "react-redux";

import FeedItemLikeButton from "./FeedItemLikeButton";

const FeedItemFull = ({ id, image }) =>
  id && (
    <View style={{}}>
      <Image style={{ flex: 1, aspectRatio: 1 }} source={{ uri: image }} />
      <FeedItemLikeButton id={id} />
    </View>
  );

const FeedItem = connect((store, props) => {
  const item = store.items.find(i => i.id === props.id);
  if (!item) {
    return { id: null };
  }
  return { id: item.id, image: item.image };
})(FeedItemFull);

export default FeedItem;
