import React from "react";
import ScrollScreen from "./components/ScrollScreen";

import { Text } from "react-native";

const Person = props => <Text>{props.person.name}</Text>;

export default class Components extends React.Component {
  static routeName = "Components";

  static chapterOptions = {
    title: "Your first React Component",
    subtitle: "JSX, Component functions, Props and composition"
  };
  render() {
    const { navigation } = this.props;
    const person = { name: "Lucy" };
    return (
      <ScrollScreen title="React Components" navigation={navigation}>
        {person && <Person person={person} />}
      </ScrollScreen>
    );
  }
}
