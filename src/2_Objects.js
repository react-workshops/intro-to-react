import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";

export default class Objects extends React.Component {
  static routeName = "Objects";

  static chapterOptions = {
    title: "Modern JavaScript",
    subtitle: "Primitives, let/const, Destructuring, Rest syntax"
  };
  render() {
    const codeString = "(num) => num + 1";
    const { navigation } = this.props;
    return (
      <ScrollScreen title="JS Objects" navigation={navigation}>
        <Card>
          <Title>Primitives</Title>
          <Paragraph>
            Javascript primitives are numbers, booleans, and strings, and null
          </Paragraph>
          <Paragraph>
            Strings have a new multiline and template syntax:
          </Paragraph>
          <Code
            code={`const person = "Anna";
const personMessage = \`Hello, \${person}\`;`}
          />
        </Card>
        <Card>
          <Title>let and const</Title>
          <Paragraph>
            These are new ways of assigning variables, replacing the "var"
            keyword in JavaScript.
          </Paragraph>
          <Paragraph>
            Using "let" allows re-assignment, while "const" does not:
          </Paragraph>
          <Code
            code={`
let name = 'Anna';
name = 'Adam';
const unchangableName = 'Ron';
// This would not work:
// unchangableName = 'Ronnie';
`}
          />
          <Paragraph>
            "let" and "const" are scoped to the block where they are declared:
            "Blocks" in JS are chunks of code with curly braces, like if
            statements or functions.
          </Paragraph>
          <Code
            code={`
let message = 'Good to go';
if (age < 13) {
  const infoMessage = 'Not so fast';
  // message can be accessed
  message = infoMessage;
}
// Outside the block, infoMessage is undefined.
`}
          />
        </Card>
        <Card>
          <Title>Creating objects</Title>
          <Paragraph>
            Objects can be created with the following syntax:
          </Paragraph>
          <Code code={`const person = { name: 'Anna' };`} />
          <Code
            code={`const person = {};
person.name = 'Anna';`}
          />
          <Paragraph>Property assignment shorthand:</Paragraph>
          <Code
            code={`const name = 'Anna';
const person = { name };`}
          />
        </Card>

        <Card>
          <Title>Destructuring</Title>
          <Paragraph>
            Data can be extracted from an object with destucturing:
          </Paragraph>
          <Code
            code={`const person = {
  name: 'Anna',
  age: 42,
  status: 'offline',
};`}
          />
          <Code
            code={`const { name, age } = person;
console.log(name);`}
          />

          <Paragraph>
            Rest syntax can be used to get the remaining keys:
          </Paragraph>

          <Code
            code={`const { name, ...personInfo } = person;
// personInfo is { age: 42, status: 'offline' }
`}
          />
        </Card>
        <Card>
          <Title>Rest Syntax</Title>
          <Paragraph>Arrays can also utilize the rest syntax:</Paragraph>
          <Code
            code={`const names = ['Jamie', 'Alex'];
const girlsNames = ['Lucy', ...names];`}
          />
        </Card>
      </ScrollScreen>
    );
  }
}
