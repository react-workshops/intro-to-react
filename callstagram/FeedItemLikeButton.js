import React from "react";

import { Button } from "react-native";

import { connect } from "react-redux";

const LikeButton = ({ id, isLiked, onToggle }) =>
  id && <Button title={isLiked ? "Liked!" : "Like Me"} onPress={onToggle} />;

const FeedItemLikeButton = connect(
  (store, props) => {
    const item = store.items.find(i => i.id === props.id);
    if (!item) {
      return { id: null };
    }
    return { isLiked: item.isLiked, id: item.id };
  },
  (dispatch, props) => ({
    onToggle: () => {
      dispatch({ type: "TOGGLE_LIKE", id: props.id });
    }
  })
)(LikeButton);

export default FeedItemLikeButton;
