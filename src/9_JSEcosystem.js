import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";

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
          <Title>Type Systems</Title>
          <Paragraph>
            Flow (quick demo + VSCode demo) TypeScript Reason
          </Paragraph>
        </Card>

        <Card>
          <Title>Continous Integration</Title>
          <Paragraph>Build on CircleCI and Travis Fastlane</Paragraph>
        </Card>
        <Card>
          <Title>Testing</Title>
          <Paragraph>Jest (workshop) Detox (workshop)</Paragraph>
        </Card>
        <Card>
          <Title>Code formatting</Title>
          <Paragraph>Perttier (quick demo + VSCode demo) ESLint</Paragraph>
        </Card>

        <Card>
          <Title>Data management libs</Title>
          <Paragraph>Redux (workshop) Unstated Mobx</Paragraph>
        </Card>
      </ScrollScreen>
    );
  }
}
