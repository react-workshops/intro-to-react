import React from "react";
import connect from "./connect";
import FeedItem from "./FeedItem";

const FeedWithItems = props =>
  props.itemIDs.map(id => <FeedItem id={id} key={id} />);

const Feed = connect(FeedWithItems, store => {
  return {
    itemIDs: store.items.map(i => i.id)
  };
});

export default Feed;
