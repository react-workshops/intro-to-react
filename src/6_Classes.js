import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";

export default class Classes extends React.Component {
  static routeName = "Classes";

  static chapterOptions = {
    title: "Intro to JS Classes",
    subtitle: "Component classes, methods, and static behavior"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="JS Classes" navigation={navigation}>
        <Card>
          <Title>Classes</Title>
          <Paragraph>
            Modern JavaScript supports classes, with the following syntax:
          </Paragraph>
          <Code
            code={`
class Car {
  constructor() {
    // called when an instance is created
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
  }
}
            `}
          />
          <Paragraph>The example class would be used as such:</Paragraph>
          <Code
            code={`
const kitt = new Car();
kitt.start();
            `}
          />
        </Card>

        <Card>
          <Title>React Components</Title>
          <Paragraph>
            You can create a component by extending React.Component and defining
            a render method:
          </Paragraph>
          <Code
            code={`
class HelloMessage extends React.Component {
  render() {
    return <Text>Hello!</Text>
  }
}
            `}
          />
        </Card>
      </ScrollScreen>
    );
  }
}
