import React from "react";
import Code from "../components/Code";
import Card from "../components/Card";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import ScrollScreen from "../components/ScrollScreen";

export default class ReactNavIntro extends React.Component {
  static routeName = "ReactNavIntro";

  static chapterOptions = {
    title: "Navigation on React Native",
    subtitle: "Introduce React Navigation"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="React Navigation" navigation={navigation}>
        <Card>
          <Title>About</Title>
          <Paragraph>
            React Navigation is a JS based navigation solution, which means it
            is entirely implemented with RN primitives, and it can be fully
            customized. This has the disadvantage of appearing slighly different
            than the vendor-provided navigation components.
          </Paragraph>
          <Paragraph>Start by installing it:</Paragraph>

          <Code code={`npm install --save react-navigation`} />
        </Card>
        <Card>
          <Title>First Navigator</Title>
          <Paragraph>
            Now, inside your app file, create a new "Stack" navigator, which is
            used as the main navigation logic of going forward to a new screen,
            and back.
          </Paragraph>
          <Code
            code={`import {StackNavigator} from 'react-navigation'

const AppNavigator = StackNavigator({
    Home: HomeScreen
});`}
          />
          <Paragraph>
            Now, this navigator can be rendered inside your app component:
          </Paragraph>
          <Code
            code={`export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
`}
          />

          <Paragraph>The basic home screen might look like this:</Paragraph>

          <Code
            code={`class HomeScreen extends React.Component {
    static navigationOptions = {
      title: "Home"
    };
    render() {
      const { navigation } = this.props;
      return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            onPress={() => {
              navigation.navigate("Image");
            }}
            title="Go To Image"
          />
        </View>
      );
    }
  }`}
          />
        </Card>
        <Card>
          <Title>Navigation Options</Title>
          <Paragraph>
            The home screen is looking a little bare without a title. That can
            be added by setting a static navigation options:
            <Code
              code={`class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => {
            navigation.navigate("Image");
          }}
          title="Go To Image"
        />
      </View>
    );
  }
}`}
            />
          </Paragraph>
        </Card>
        <Card>
          <Title>Adding new screens</Title>
          <Paragraph>
            Now, lets navigate to a new screen in our app. Inside the home
            screen:
          </Paragraph>

          <Code
            code={`const { navigation } = this.props;
return (
  <View>
    <Button
      onPress={() => {
        navigation.navigate("Image");
      }}
      title="Go To Image"
    />
  </View>
);`}
          />
          <Paragraph>
            Also register the new "Image" screen in the stack navigator:
          </Paragraph>

          <Code
            code={`const AppNavigator = StackNavigator({
Home: HomeScreen,
Image: ImageScreen
});`}
          />
        </Card>
        <Card>
          <Title>Navigation params</Title>

          <Paragraph>
            Next, lets say we need to pass some information to the "Image"
            screen. We can do that by passing params when we navigate:
          </Paragraph>

          <Code
            code={`
this.props.navigation.navigate("Image", {id: '123'});`}
          />

          <Paragraph>
            Then, within our Image screen component, we can access the ID via:
          </Paragraph>

          <Code code={`this.props.navigation.getParam('id')`} />
        </Card>
      </ScrollScreen>
    );
  }
}
