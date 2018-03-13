import React from "react";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";
import BigLink from "./components/BigLink";

export default class Ecosystem extends React.Component {
  static routeName = "JSEcosystem";

  static chapterOptions = {
    title: "Javascript tooling and ecosystem",
    subtitle: "Type systems and language tools"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="JS Ecosystem" navigation={navigation}>
        <Card>
          <Title>Testing</Title>
          <Paragraph>
            The following tools are useful for testing your React-Native
            application:
          </Paragraph>
          <BigLink to="https://facebook.github.io/jest/">Jest</BigLink>
          <BigLink to="https://github.com/wix/detox">Detox</BigLink>
        </Card>
        <Card>
          <Title>Type Systems</Title>
          <Paragraph>
            The biggest shortcoming of the JavaScript language is the lack of a
            built-in type system. There are several community attempts to remedy
            this, by either offering a different language that compiles to JS,
            or by adding a type system on top of JS.
          </Paragraph>
          <Paragraph>The following are type systems for JS:</Paragraph>
          <BigLink to="https://flow.org/">Flow</BigLink>
          <BigLink to="https://www.typescriptlang.org/">TypeScript</BigLink>
          <Paragraph>
            The following compile-to-JS lanugages offer improved type systems
            over JS.
          </Paragraph>
          <BigLink to="https://reasonml.github.io/">ReasonML</BigLink>
          <BigLink to="https://en.wikipedia.org/wiki/Elm_(programming_language)">
            Elm
          </BigLink>
        </Card>
        <Card>
          <Title>Continous Integration</Title>
          <Paragraph>
            These platforms will continously build, test, and deploy your code
            as it changes in your repository:
          </Paragraph>
          <BigLink to="https://circleci.com/">CircleCI</BigLink>
          <BigLink to="https://travis-ci.org/">TravisCI</BigLink>
          <Paragraph>
            The following services and tools will help build and deploy mobile
            apps:
          </Paragraph>
          <BigLink to="https://expo.io/">Expo</BigLink>
          <BigLink to="https://appcenter.ms/">Microsoft AppCenter</BigLink>
          <BigLink to="https://fastlane.tools/">Fastlane</BigLink>
        </Card>

        <Card>
          <Title>Code formatting</Title>
          <Paragraph>
            To help keep your code properly formattted within your organization,
            you can use prettier. ESLint is a powerful system for warning and
            throwing errors on invalid code.
          </Paragraph>
          <BigLink to="https://eslint.org/">ESLint</BigLink>
          <BigLink to="https://prettier.io/">Prettier</BigLink>
        </Card>

        <Card>
          <Title>Data management libs</Title>
          <Paragraph>
            Later in the workshop, we will go into depth with some of these data
            management solutions:
          </Paragraph>
          <BigLink to="https://github.com/reactjs/react-redux">
            React-Redux
          </BigLink>
          <BigLink to="https://github.com/jamiebuilds/unstated">
            Unstated
          </BigLink>
          <BigLink to="https://github.com/mobxjs/mobx">Mobx</BigLink>
        </Card>
      </ScrollScreen>
    );
  }
}
