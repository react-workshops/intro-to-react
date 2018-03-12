import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";

export default class Components extends React.Component {
  static routeName = "Components";

  static chapterOptions = {
    title: "Your first React Component",
    subtitle: "JSX, Component functions, Props and composition"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="React Components" navigation={navigation}>
        <Card>
          <Title>Custom Components</Title>
          <Paragraph>
            Components can be a simple function, with a props object as the
            argument:
          </Paragraph>
          <Code
            code={`
const Person = (props) => (
  <Text>
    Your name is {props.name}
  </Text>
);
            `}
          />
          <Paragraph>
            The parent component would render your custom component:
          </Paragraph>
          <Code
            code={`
const App = () => (
  <Person name="" />
);
            `}
          />
        </Card>
        <Card>
          <Title>JSX</Title>
          <Paragraph>
            The XML-like is called JSX, and it allows easy mixing of
            declarative-style syntax, with JavaScript, by using the "{}" curly
            braces
          </Paragraph>
          <Code
            code={`
const Person = (props) => (
  <Text>
    You are
    {props.name === 'Jim' ? '' : ' not'}
    Jim
  </Text>
);
            `}
          />
        </Card>
        <Card>
          <Title>Children prop</Title>
          <Paragraph>
            The content between the opening and closing tag is known as
            "children", and it acts like a normal prop.
          </Paragraph>
          <Code
            code={`
const BlueText = (props) => (
  <Text style={{color: 'blue'}}>
    {props.children}
  </Text>
);
            `}
          />
          <Paragraph>
            The parent component can render pass children normally:
          </Paragraph>
          <Code
            code={`
const BlueHello = () => (
  <BlueText>
    Hello!
  </BlueText>
);
            `}
          />
        </Card>
      </ScrollScreen>
    );
  }
}
