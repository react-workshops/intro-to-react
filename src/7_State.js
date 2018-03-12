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
    subtitle: "Using setState and transactional setState"
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
            code={`class IncrementButton extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <Button
        onClick={this._increment}
        label={\`Pressed \${this.state.count} times\`}
      />
    )
  }
  _increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
}
            `}
          />
        </Card>
        <Card>
          <Title>Transactional State Updates</Title>
          <Paragraph>
            When state updates happen frequently, it is possible for setState to
            happen twice before the first render can happen.
          </Paragraph>
          <Paragraph>
            When your state depends on the previous state, this can cause merge
            conflicts. You can use the transactional setState API in this case,
            to define how the state should change as a function of the previous
            state:
          </Paragraph>
          <Code
            code={`class IncrementButton extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <Button
        onClick={this._increment}
        label={\`Pressed \${this.state.count} times\`}
      />
    )
  }
  _increment = () => {
    this.setState(lastState => ({
      count: lastState.count + 1,
    }));
  }
}
            `}
          />
        </Card>
        <Card>
          <Title>SetState callback</Title>
          <Paragraph>
            Sometimes you will need to do additional tasks once the UI has been
            updated via setState. You can pass a callback as a second argument
            to setState, which will be called after component has re-rendered.
          </Paragraph>
          <Code
            code={`this.setState(lastState => ({
  count: lastState.count + 1,
}), () => {
  console.log('The component has updated with the new count!')
});
            `}
          />
        </Card>
      </ScrollScreen>
    );
  }
}
