import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";
import BigLink from "./components/BigLink";

export default class StyleChapter extends React.Component {
  static routeName = "StyleChapter";

  static chapterOptions = {
    title: "Style and Layout in React Native",
    subtitle: "StyleSheet, flexbox, and style documentation"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="Style in React Native" navigation={navigation}>
        <Card>
          <Title>Inline Style and StyleSheets</Title>
          <Paragraph>
            Core components in React Native can take a style object prop:
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
            But in practice, when your styles do not change, you should use a
            StyleSheet:
          </Paragraph>
          <Code
            code={`
const styles = StyleSheet.create({
  text: { color: 'blue' }
})
const BlueText = (props) => (
  <Text style={styles.text}>
    {props.children}
  </Text>
);
            `}
          />
        </Card>
        <Card>
          <Title>Flexbox</Title>
          <Paragraph>
            React native uses a custom implementation of flexbox, a web standard
            layout model.
          </Paragraph>
        </Card>
        <Card>
          <Title>Style types</Title>
          <Paragraph>
            There are different sets of styles supported on each of View, Text,
            and Image. See React Native's documentation for an exhaustive list
            of stylesheet properties:
          </Paragraph>
          <BigLink to="http://facebook.github.io/react-native/docs/layout-props.html">
            Universal Layout Props
          </BigLink>
          <BigLink to="http://facebook.github.io/react-native/docs/view-style-props.html">
            View Style Props
          </BigLink>
          <BigLink to="http://facebook.github.io/react-native/docs/text-style-props.html">
            Text Style Props
          </BigLink>
          <BigLink to="http://facebook.github.io/react-native/docs/image-style-props.html">
            Image Style Props
          </BigLink>
        </Card>
        <Card>
          <Title>Animations</Title>
          <Paragraph>
            React Native has a powerful animation library called "Animated", in
            addition to a handy yet simple "LayoutAnimation" utility, which
            automatically performs animations for you.
          </Paragraph>
        </Card>
      </ScrollScreen>
    );
  }
}
