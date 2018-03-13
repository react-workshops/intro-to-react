import React from "react";

// import ProfileHeader from "./ProfileHeader";

import { Button } from "react-native";

import store from "./store";
import connect from "./connect";

const LikeButton = ({ id, isLiked }) =>
  id && (
    <Button
      title={isLiked ? "Liked!" : "Like Me"}
      onPress={() => {
        store.dispatch({ type: "TOGGLE_LIKE", id });
      }}
    />
  );

const FeedItemLikeButton = connect(LikeButton, (store, props) => {
  const item = store.items.find(i => i.id === props.id);
  if (!item) {
    return { id: null };
  }
  return { isLiked: item.isLiked, id: item.id };
});

export default FeedItemLikeButton;
