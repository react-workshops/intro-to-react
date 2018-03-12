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
            code={`class Car {
  constructor() { // called when an instance is created
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
            code={`const kitt = new Car();
kitt.start();
            `}
          />
        </Card>
        <Card>
          <Title>Class properties</Title>
          <Paragraph>
            Properties can be assigned on your class with the following syntax:
          </Paragraph>
          <Code
            code={`class Car {
  isRunning = false;

  start() {
    this.isRunning = true;
  }
}
            `}
          />
        </Card>
        <Card>
          <Title>React Components</Title>
          <Paragraph>
            You can create a component by extending React.Component and defining
            a render method.
          </Paragraph>
          <Code
            code={`class HelloMessage extends React.Component {
  render() {
    return <Text>Hello!</Text>
  }
}
            `}
          />
          <Paragraph>
            Props are passed in to the component via `this.props`:
          </Paragraph>
          <Code
            code={`class Person extends React.Component {
  render() {
    const { person } = this.props;
    return <Text>{person.name}</Text>;
  }
}
            `}
          />
        </Card>

        <Card>
          <Title>Method autobinding</Title>
          <Paragraph>
            When your methods will be passed to another component, and they need
            to reference "this" instance correctly, they should be bound. This
            can be done with a combination of the class property syntax, and fat
            arrow semantics:
          </Paragraph>
          <Code
            code={`class ButtonPresser extends React.Component {
  render() {
    const { person } = this.props;
    return <Button onPress={this._onButtonPress} />;
  }
  _onButtonPress = () => {
    this.doSomething();
  };
  doSomething() {
    ...
  }
}
            `}
          />
        </Card>
        <Card>
          <Title>Static Properties</Title>
          <Paragraph>
            It is often necessary for other components to access information on
            your component class. This can be achieved with static properties:
          </Paragraph>

          <Code
            code={`class PersonView extends React.Component {
  static formatName = name => name.trim();
  render() {
    const { person } = this.props;
    return <Text>
  }
  _onButtonPress = () => {
    this.doSomething();
  };
  doSomething() {
    ...
  }
}
            `}
          />
          <Paragraph>
            Now, other modules would be able to access PersonView.formatName.
          </Paragraph>
        </Card>
      </ScrollScreen>
    );
  }
}
