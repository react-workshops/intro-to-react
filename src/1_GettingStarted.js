import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";
import BigLink from "./components/BigLink";

export default class GettingStarted extends React.Component {
  static routeName = "GettingStarted";

  static chapterOptions = {
    title: "Getting Started",
    subtitle: "Set up your computer and run this app"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="Style in React Native" navigation={navigation}>
        <Card>
          <Title>Get Dependencies</Title>
          <Paragraph>Install NodeJS and Yarn.</Paragraph>
          <BigLink to="https://nodejs.org/en/">NodeJS 8+</BigLink>
          <BigLink to="https://yarnpkg.com/en/">Yarn 1+</BigLink>

          <Paragraph>
            On a mac, you can use brew to quickly install both:
          </Paragraph>
          <Code
            code={`brew install nodejs
brew install yarn
`}
          />
        </Card>

        <Card>
          <Title>Get This Project</Title>
          <Paragraph>Check out this repository from github:</Paragraph>
          <BigLink to="https://github.com/react-workshops/intro-to-react" />
          <Code
            code={`git clone git@github.com:react-workshops/intro-to-react.git`}
          />
        </Card>
        <Card>
          <Title>Install and Run</Title>
          <Paragraph>
            Run the following to install the project dependencies and start the
            app:
          </Paragraph>
          <Code
            code={`cd intro-to-react
yarn
yarn start
`}
          />
          <Paragraph>Now the app should launch at the following URL:</Paragraph>
          <BigLink to="http://localhost:3000" />
        </Card>
        <Card>
          <Title>Edit code</Title>
          <Paragraph>Download a code editor like VSCode:</Paragraph>
          <BigLink to="https://code.visualstudio.com/" />

          <Paragraph>
            Then go edit the code in the intro-to-react folder. The next chapter
            is "src/2_Objects.js".
          </Paragraph>
        </Card>
      </ScrollScreen>
    );
  }
}
