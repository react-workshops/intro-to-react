import React from "react";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";
import TodoApp from "./examples/TodoApp";

import createHistory from "history/createBrowserHistory";
const history = createHistory();

const Chapters = [
  require("./1_GettingStarted").default,
  require("./2_Objects").default,
  require("./3_Functions").default,
  require("./4_Components").default,
  require("./5_Style").default,
  require("./6_Classes").default,
  require("./7_State").default,
  require("./8_Lifecycle").default,
  require("./9_JSEcosystem").default
];

const getStateFromLocation = location => {
  const { pathname } = location;
  const name = pathname.slice(1);

  const openIndex = Chapters.findIndex(c => c.routeName === name);
  const openChapterIndex = openIndex !== -1 ? openIndex : null;

  return { openChapterIndex };
};
class IntroToReact extends React.Component {
  state = getStateFromLocation(history.location);

  componentDidMount() {
    this._unlistenHistory = history.listen((location, action) => {
      this.setState(getStateFromLocation(location));
    });
  }
  componentWillUnmount() {
    this._unlistenHistory && this._unlistenHistory();
  }
  render() {
    const { openChapterIndex } = this.state;
    const onSetChapter = chapterName => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      if (chapterName === null) {
        history.push("/");
      } else {
        history.push("/" + chapterName);
      }
    };
    if (openChapterIndex != null) {
      const Chapter = Chapters[openChapterIndex];
      return (
        <Chapter navigation={{ onSetChapter, openChapterIndex, Chapters }} />
      );
    }
    return (
      <ScrollScreen title={"Welcome to ReactWork.shop"}>
        <Card>
          {Chapters.map((chapter, chapterIndex) => (
            <Card
              key={chapter.routeName}
              onPress={() => {
                onSetChapter(chapter.routeName);
              }}
            >
              <Title>{chapter.chapterOptions.title}</Title>
              <Paragraph>{chapter.chapterOptions.subtitle}</Paragraph>
            </Card>
          ))}
        </Card>
        <Card>
          <Title>Todo App Example:</Title>
          <TodoApp />
        </Card>
      </ScrollScreen>
    );
  }
}

export default IntroToReact;
