import React from "react";
import Code from "../components/Code";
import Card from "../components/Card";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import ScrollScreen from "../components/ScrollScreen";

export default class ReactNavNesting extends React.Component {
  static routeName = "ReactNavNesting";

  static chapterOptions = {
    title: "Nesting Navigators",
    subtitle: "Compose Stack, Drawer, and Tab Navigators"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="Nesting Navigators" navigation={navigation}>
        <Card>
          <Title>Stack in Tabs</Title>
          <Paragraph>
            A common pattern for navigator composition is the iOS pattern of
            having a stack within a set of bottom tabs. Lets look at how that
            can be implemented:
          </Paragraph>
          <Code
            code={`const TabA = StackNavigator({
    A: ScreenA,
    B: ScreenB,
});
const TabB = StackNavigator({
    A: ScreenA,
    C: ScreenC,
});
const AppNavigator = TabNavigator({
    TabA,
    TabB,
})
`}
          />
          <Paragraph>
            With this structure, each tab will maintain its own stack of
            screens. Screen A can be navigated to within either stack, but
            screen B and C belong to a single tab. So, when navigating to one of
            those routes, the tab will change.
          </Paragraph>
        </Card>
      </ScrollScreen>
    );
  }
}
