import React from "react";

import { Button } from "react-native";

import { connect } from "react-redux";

class LikeButton extends React.Component {
  static defaultProps = {
    renderButton: (title, onPress) => <Button title={title} onPress={onPress} />
  };
  render() {
    const { id, isLiked, onToggle, renderButton } = this.props;
    return (
      id && <Button title={isLiked ? "Liked!" : "Like Me"} onPress={onToggle} />
    );
  }
}

const FeedItemLikeButton = connect(
  (store, props) => {
    const isLiked = store.likedItems.indexOf(props.id) !== -1;
    return { isLiked, id: props.id };
  },
  (dispatch, props) => ({
    onToggle: () => {
      dispatch({ type: "TOGGLE_LIKE", id: props.id });
    }
  })
)(LikeButton);

export default FeedItemLikeButton;
