import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";

export default class Lifecycle extends React.Component {
  static routeName = "Lifecycle";

  static chapterOptions = {
    title: "React Component Lifecycle",
    subtitle: "Imperitive code, state updates for prop changes"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="JS Lifecycle" navigation={navigation}>
        <Card>
          <Title>Mounting and Unmounting</Title>
          <Paragraph>
            When a React component is rendered for the first time, React will
            "mount" it. Your component can register to know when it has been
            mounted and is now visible to the user:
          </Paragraph>
          <Code
            code={`
class HelloMessage extends React.Component {
  render() {
    return <Text>Hello!</Text>
  }
  componentDidMount() {
    console.log('The component is now on the screen!');
  }
}
            `}
          />
          <Paragraph>
            Your component may re-render several times in place while it is
            mounted.
          </Paragraph>
          <Paragraph>
            Eventually the parent may stop rendering the component, and it will
            unmount. You can register a hook to know before that happens:
          </Paragraph>
          <Code
            code={`
class HelloMessage extends React.Component {
  render() {
    return <Text>Hello!</Text>
  }
  componentWillUnmount() {
    console.log('The component is now on the screen!');
  }
}
            `}
          />
        </Card>
      </ScrollScreen>
    );
  }
}
