import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";

const fetchImages = async () => {
  try {
    let response = await fetch(
      "https://dog.ceo/api/breed/retriever/golden/images"
    );
    let responseJson = await response.json();
    return responseJson.message;
  } catch (e) {
    console.error(e);
  }
};

export default class DataFetching extends React.Component {
  static routeName = "DataFetching";

  static chapterOptions = {
    title: "Data fetching",
    subtitle: "Getting external data to our application"
  };

  async componentDidMount() {
    const imagesData = await fetchImages();
    console.log(imagesData);
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="Data fetching" navigation={navigation}>
        <Card>
          <Title>Fetch</Title>
          <Paragraph>1. Making a request</Paragraph>
          <Code code={`fetch("https://callstack.com/someData.json");`} />

          <Paragraph>
            Fetch methods will return a Promise that makes it straightforward to
            write code that works in an asynchronous manner:
          </Paragraph>

          <Paragraph>2. Usage with async/await</Paragraph>
          <Code
            code={`
const getMoviesFromApi = async () => {
  try {
    let response = await fetch(
      'https://facebook.github.io/react-native/movies.json'
    );
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
          `}
          />
        </Card>

        <Card>
          <Title>Example images API</Title>
          <Code
            code={`
const fetchImages = async () => {
  try {
    let response = await fetch(
      "https://dog.ceo/api/breed/retriever/golden/images"
    );
    let responseJson = await response.json();
    return responseJson.message;
  } catch (e) {
    console.error(e);
  }
};
          `}
          />
        </Card>
      </ScrollScreen>
    );
  }
}
