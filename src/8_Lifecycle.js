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
        <Card>
          <Title>Use keys to control mounting</Title>
          <Paragraph>
            The parent can provide a key to identify each component. When the
            key changes, the identity is different and the component is
            re-mounted.
          </Paragraph>
          <Code
            code={`
class App extends React.Component {
  render() {
    return <HelloMessage key="a" />
  }
}
            `}
          />
          <Paragraph>
            Keys are also used to tell React how components in an array are
            ordered:
          </Paragraph>
          <Code
            code={`
const App = ({}) => (
  <List>
    {['Jamie', 'Lucy'].map(name =>
      <ListItem key={name} name={name} />
    )}
  </List>
);
            `}
          />
          <Paragraph>
            If you re-render with the list items in a different order, the key
            is used to tell React which items have been added, removed, or
            re-arranged.
          </Paragraph>
        </Card>
        <Card>
          <Title>Update State in Response to Prop changes</Title>
          <Paragraph>asdf</Paragraph>
        </Card>
      </ScrollScreen>
    );
  }
}
