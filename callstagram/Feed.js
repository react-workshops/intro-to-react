import React from "react";
import FeedItem from "./FeedItem";

import { connect } from "react-redux";

import { ScrollView } from "react-native";

const FeedWithItems = props => {
  return (
    <ScrollView>
      {props.itemIDs.map(id => <FeedItem id={id} key={id} />)}
    </ScrollView>
  );
};

const Feed = connect(store => {
  return {
    itemIDs: store.items.map(i => i.id)
  };
})(FeedWithItems);

export default Feed;
