import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";

export default class Functions extends React.Component {
  static routeName = "Functions";

  static chapterOptions = {
    title: "Mastering Functions in JS",
    subtitle: "Arrow functions, Destructuring"
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="JS Functions" navigation={navigation}>
        <Card>
          <Title>Normal functions</Title>
          <Paragraph>
            Traditionally, JavaScript supports the following syntax to declare a
            function
          </Paragraph>
          <Code
            code={`
function getName(person) {
  return person.name;
}
            `}
          />
        </Card>
        <Card>
          <Title>"Arrow" functions</Title>
          <Paragraph>The following syntax is now supported:</Paragraph>
          <Code
            code={`
const getName = (person) => {
  return person.name;
};
            `}
          />
          <Paragraph>
            Arrow functions are also autobound with a different "this" than
            traditionally-declared functions will have.
          </Paragraph>
          <Paragraph>
            With arrow functions, the "this" inside the function will match the
            "this" when it is declared.
          </Paragraph>
          <Paragraph>
            The arrow function above is techinically equivalent to:
          </Paragraph>
          <Code
            code={`
const getName = (function(person) {
  return person.name;
}).bind(this);
            `}
          />
        </Card>

        <Card>
          <Title>"Arrow" function shorthand</Title>
          <Paragraph>
            With arrow functions, you can also skip the curly braces, return
            statement, and single argument parenthesis:
          </Paragraph>
          <Code
            code={`
const getName = person => person.name;
            `}
          />
        </Card>

        <Card>
          <Title>Argument Destructuring</Title>
          <Paragraph>
            When you pass an object as a function argument, you can destucture
            in the argument definition:
          </Paragraph>
          <Code
            code={`
const getName = ({name, ...personInfo}) => name;
            `}
          />
        </Card>

        <Card>
          <Title>Default Arguments</Title>
          <Paragraph>
            Defaults can be provided in case arguments are undefined:
          </Paragraph>
          <Code
            code={`
const createPerson = (name, pronoun = 'they') => {
  // pronoun will be 'they' if not provided
}
`}
          />
        </Card>
      </ScrollScreen>
    );
  }
}
