import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";

export default class State extends React.Component {
  static routeName = "State";

  static chapterOptions = {
    title: "React Component State",
    subtitle: "Using setState, keys in React"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="React State" navigation={navigation}>
        <Card>
          <Title>Component state</Title>
          <Paragraph>
            You can use this.state and the setState method to dynamically store
            data on your component, and re-render when it changes.
          </Paragraph>
          <Code
            code={`
class IncrementButton extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <Button
        onClick={this._increment}
        label={\`Pressed \${this.state.count} times\`}
      />
    )
  }
}
            `}
          />
        </Card>
      </ScrollScreen>
    );
  }
}
