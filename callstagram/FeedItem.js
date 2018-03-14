import React from "react";
import { View, Image } from "react-native";

import { connect } from "react-redux";

import FeedItemLikeButton from "./FeedItemLikeButton";

const FeedItemFull = ({ id, image, layout, renderLikeButton }) => {
  console.log("Rendering item! ", layout);
  return (
    id && (
      <View style={{}}>
        <Image
          style={{ width: layout.width / 2, aspectRatio: 1 }}
          source={{ uri: image }}
        />
        <FeedItemLikeButton id={id} renderButton={renderLikeButton} />
      </View>
    )
  );
};

const FeedItem = connect((store, props) => {
  const item = store.items.find(i => i.key === props.id);
  if (!item) {
    return { id: null };
  }
  return { id: item.key, image: item.image, layout: store.layout };
})(FeedItemFull);

export default FeedItem;
