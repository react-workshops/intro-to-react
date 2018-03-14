import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";

import { connect } from "react-redux";

import FeedItemLikeButton from "./FeedItemLikeButton";

const PhotoScreenFull = props => {
  return (
    props.id && (
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Photo", { id: props.id });
          }}
        >
          <Image
            style={{ width: props.layout.widthPhotoScreen, aspectRatio: 1 }}
            source={{ uri: props.image }}
          />
        </TouchableWithoutFeedback>
        <FeedItemLikeButton
          id={props.id}
          renderButton={props.renderLikeButton}
        />
      </View>
    )
  );
};

PhotoScreen = connect((store, props) => {
  const item = store.items.find(i => i.key === props.navigation.getParam("id"));
  if (!item) {
    return { id: null };
  }
  return { id: item.key, image: item.image, layout: store.layout };
})(PhotoScreenFull);

PhotoScreen.navigationOptions = {
  title: "Good Doggo"
};

export default PhotoScreen;
