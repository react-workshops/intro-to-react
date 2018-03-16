import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";

import { connect } from "react-redux";

import FeedItemLikeButton from "./FeedItemLikeButton";

class FeedItemFull extends React.PureComponent {
  render() {
    const { id, image, layout, renderLikeButton, navigation } = this.props;
    return (
      id && (
        <View style={{}}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("Photo", { id });
            }}
          >
            <Image
              style={{ width: layout.width / 2, aspectRatio: 1 }}
              source={{ uri: image }}
            />
          </TouchableWithoutFeedback>
          <FeedItemLikeButton id={id} renderButton={renderLikeButton} />
        </View>
      )
    );
  }
}

const FeedItem = connect((store, props) => {
  const item = store.items.find(i => i.key === props.id);
  if (!item) {
    return { id: null };
  }
  return { id: item.key, image: item.image, layout: store.layout };
})(FeedItemFull);

export default FeedItem;
