import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";
import BigLink from "./components/BigLink";

import { Image } from "react-native";

export default class Callstagram extends React.Component {
  static routeName = "Callstagram";

  static chapterOptions = {
    title: "Callstagram app",
    subtitle: "Let's recap on what we've learnt so far"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="Callstagram" navigation={navigation}>
        <Card>
          <Title>Let's recap</Title>
          <Paragraph>
            Knowing more about React, let's build Instagram-like app.
          </Paragraph>

          <Paragraph>1. Go to CRA docs to build the app:</Paragraph>
          <BigLink to="https://github.com/facebook/create-react-app#quick-overview">
            create-react-app getting started
          </BigLink>

          <Paragraph>2. Add react-native-web to your project:</Paragraph>
          <Code code={`npm install --save react-native-web`} />
        </Card>

        <Card>
          <Title>Example</Title>
          <Image
            source={{
              uri:
                "https://user-images.githubusercontent.com/3802023/37342479-ee5f6b14-2681-11e8-8c8e-b4e66d8b1c32.png"
            }}
            style={{ width: 800, height: 800, alignSelf: "center" }}
          />
        </Card>
      </ScrollScreen>
    );
  }
}
